import express from "express";
import User from "../models/User";
import Article from "../models/Article";
import ArticleCover from "../models/ArticleCover";
import { stripe } from "../utils/stripe";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/covers", async (req, res) => {
  try { 
    const articleCovers = await ArticleCover.aggregate([
      { $sample: { size: 10 } },
    ]);
    res.status(200).json(articleCovers);
  } catch (err) {
    console.log(err);
  }
});

router.post("/singleArticle", async (req, res) => {

  // const token = req?.cookies?.access_token;
  // const authenticatedUser = (await jwt.verify(token, process.env.JWT as string)) as {
  //   email: string;
  // };
  // req.body.user = authenticatedUser.email;


  // const user = await User.findOne({ email: req.body.user });

  const token = req?.cookies?.access_token;
let authenticatedUser;

if (token) {
  authenticatedUser = await jwt.verify(token, process.env.JWT as string) as { email: string };
  req.body.user = authenticatedUser.email;
}

const user = await User.findOne({ email: req.body.user });

  if (!user) {
    const coverArticleId = req.body.articleId;
    try {
      const singleArticle = await Article.findOne({
        _id: coverArticleId,
        access: "Free",
      });
      return res.json(singleArticle);
    } catch (error) {
      console.log(error);
    }
  }

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
    
    if (!subscriptions.data.length) {
      const coverArticleId = req.body.articleId;
      try {
        const singleArticle = await Article.findOne({
          _id: coverArticleId,
          access: "Free",
        });
        return res.json(singleArticle);
      } catch (error) {
        console.log(error);
      }
    }

    //@ts-ignore
    const plan = subscriptions.data[0].plan.nickname;

    if (plan === "Basic") {
      const coverArticleId = req.body.articleId;
      try {
        const singleArticle = await Article.findOne({
          _id: coverArticleId,
          access: { $in: ["Free", "Basic"] },
        });
        return res.json(singleArticle);
      } catch (error) {
        console.log(error);
      }
    }

    if (plan === "Premium") {
      const coverArticleId = req.body.articleId;
      try {
        const singleArticle = await Article.findOne({
          _id: coverArticleId,
          access: { $in: ["Free", "Basic", "Premium"] },
        });
        return res.json(singleArticle);
      } catch (error) {
        console.log(error);
      }
    }
  // }
});

export default router;
