import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const CUSTOMER_SECRET_TOKEN = process.env.CUSTOMER_SECRET_TOKEN as string;
export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      Error: 'Login Required',
    });
  }
  const [, token] = authorization.split(' ');
  try {
    verify(token, CUSTOMER_SECRET_TOKEN);
    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'Token is invalid or expired',
    });
  }
};
