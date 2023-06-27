import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const TOKEN = process.env.CUSTOMER_SECRET_TOKEN as string;
export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      ERROR: 'Login required',
    });
  }
  const [, token] = authorization.split(' ');
  try {
    verify(token, TOKEN);
    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'Token is invalid or expired',
    });
  }
};
