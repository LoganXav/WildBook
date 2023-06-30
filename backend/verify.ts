import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("You are not authenticated!");
  try {
    const user = (await jwt.verify(token, process.env.JWT as string)) as {
      email: string;
    };
    req.body.user = user.email;
    next();
  } catch (err) {
    return res.status(403).json("Token is not valid!");
    console.log(err);
  }
};
