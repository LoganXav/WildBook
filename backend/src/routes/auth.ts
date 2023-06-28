import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
  "/signup",
  body("email").isEmail().withMessage("The email is invalid"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("The password is too short"),
  async (req, res) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });

      return res.json({ errors, data: null });
    }

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.json({
        errors: [
          {
            msg: "I'm afraid this email address is taken.",
          },
        ],
        data: null,
      });
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
        .json({
          errors: [],
          data,
        });
    }
  }
);

router.get("/signin", async (req, res) => {
  const user = await User.findOne({ name: req.body.name });
  if (!user) {
    return res.json({
      errors: [
        {
          msg: "You may have gotten your credentials wrong.",
        },
      ],
      data: null,
    });
  }
  const isCorrect = bcrypt.compareSync(req.body.password, user.password);
  if (isCorrect) {
    const token = jwt.sign({ id: user._id }, process.env.JWT as string, {
      expiresIn: 360000,
    });
    const { password, ...data } = user.toObject();
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({
        errors: [],
        data,
      });
  } else {
    res.json({
      errors: [
        {
          msg: "You may have gotten your credentials wrong.",
        },
      ],
      data: null,
    });
  }
});

export default router;
