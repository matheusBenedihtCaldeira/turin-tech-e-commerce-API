import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
const USERTOKEN = process.env.USER_SECRET_TOKEN as string;
require('dotenv').config();
export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      Error: 'Login Required',
    });
  }
  const [, token] = authorization.split(' ');
  try {
    verify(token, USERTOKEN);
    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'Token is invalid or expired',
    });
  }
};
