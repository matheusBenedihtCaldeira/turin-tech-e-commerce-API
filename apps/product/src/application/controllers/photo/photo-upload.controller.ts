import { prismaClient } from '../../../infra/database/prismaClient';
import { Request, Response } from 'express';

export class PhotoController {
  async handle(req: Request, res: Response) {
    const { productId } = req.body;
    const { originalname, filename } = req.file as Express.Multer.File;
    console.log(filename);
    const photo = await prismaClient.photo.create({
      data: {
        productId: productId,
        fileName: filename,
        originalName: originalname,
      },
    });

    return res.json(photo);
  }
}
