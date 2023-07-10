import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { stripe } from "../utils/stripe";
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

        const customer = await stripe.customers.create(
          {
            email: req.body.email,
          },
          { apiKey: process.env.STRIPE_SECRET_KEY }
        );

        const newUser = await User.create({ ...req.body, password: hash, customerStripeId: customer.id });
        const token = jwt.sign({ email: newUser.email }, process.env.JWT as string, {
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
      const token = jwt.sign({ email: user.email }, process.env.JWT as string, {
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
    .clearCookie("access_token", 
      // secure: true,
      // sameSite: "none",
    )
    .status(200)
    .json("User has been logged out.");
});

router.get("/sub", verifyToken, async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.user });
    const subscriptions = await stripe.subscriptions.list(
      {
        customer: user?.customerStripeId,
        status: "all",
        expand: ["data.default_payment_method"],
      },
      {
        apiKey: process.env.STRIPE_SECRET_KEY,
      }
    );

    //@ts-ignore
    const plan = subscriptions.data[0].plan.nickname;
    if (plan) return res.json(plan)
  } catch (err) {
    console.log(err)
  }
});

export default router;
