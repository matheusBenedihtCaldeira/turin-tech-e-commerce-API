import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      Error: 'Login Required',
    });
  }
  const [, token] = authorization.split(' ');
  try {
    verify(token, '0e9f655d-198d-47e7-94fc-abc6ff5d4a62');
    return next();
  } catch (err) {
    return res.status(401).json({
      message: 'Token is invalid or expired',
    });
  }
};
