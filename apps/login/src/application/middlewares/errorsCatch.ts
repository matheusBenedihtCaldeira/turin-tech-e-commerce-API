/* eslint-disable @typescript-eslint/no-unused-vars */
import 'express-async-errors';
import { NextFunction, Request, Response } from 'express';
export function errorsCatch(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  return res.json({
    status: 'Error',
    message: error.message,
  });
}
