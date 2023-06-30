import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "../../verify";

const router = express.Router();

router.post(
  "/signup",
  body("email").isEmail().withMessage("The email address is invalid!"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("The password is too short!"),
  async (req, res) => {
    try {
      const validationErrors = validationResult(req);

      if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map((error) => {
          return res.status(403).json(error.msg);
        });
      }

      const user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(405).json("A user with this email already exists!");
      } else {
        const hash = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create({ ...req.body, password: hash });
        const token = jwt.sign({ id: newUser._id }, process.env.JWT as string, {
          expiresIn: 360000,
        });
        const { password, ...data } = newUser.toObject();

        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json({
            data,
          });
      }
    } catch (err) {
      console.log(err);
    }
  }
);

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) {
      return res
        .status(401)
        .json("You've gotten either the name or password wrong!");
    }

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (isCorrect) {
      const token = jwt.sign({ id: user._id }, process.env.JWT as string, {
        expiresIn: 360000,
      });
      const { password, ...data } = user.toObject();
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({
          data,
        });
    } else {
      return res
        .status(401)
        .json("You've gotten either the name or password wrong!");
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/logout", (req, res) => {
  res
    .clearCookie("access_token", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged out.");
});

router.get("/me", verifyToken, async (req, res) => {
  res.send("me route")
})


export default router;
