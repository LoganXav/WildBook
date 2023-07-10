import express from "express";
import User from "../models/User";
import { verifyToken } from "../../verify";
import { stripe } from "../utils/stripe";

const router = express.Router();

router.get("/prices", verifyToken, async (req, res) => {
  const prices = await stripe.prices.list({
    apiKey: process.env.STRIPE_SECRET_KEY,
  });

  return res.json(prices);
});

router.post("/session", verifyToken, async (req, res) => {
  const user = await User.findOne({ email: req.body.user });

  if (user !== null) {
    const session = await stripe.checkout.sessions.create(
      {
        mode: "subscription",
        payment_method_types: ["card"],
        line_items: [
          {
            price: req.body.planId,
            quantity: 1,
          },
        ],
        success_url: "http://localhost:5173/",
        cancel_url: "http://localhost:5173/plans",
        customer: user.customerStripeId,
      },
      { apiKey: process.env.STRIPE_SECRET_KEY }
    );

    return res.json(session);
  }
});

export default router;
