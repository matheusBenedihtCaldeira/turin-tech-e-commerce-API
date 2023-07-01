import { Router } from 'express';
import { PhotoController } from '../../../application/controllers/photo/photo-upload.controller';
import uploadsConfig from '../../../config/multer';
import multer from 'multer';
const router = Router();
const upload = multer(uploadsConfig);
router.post('/photo/upload', upload.single('photos'), (req, res) => {
  new PhotoController().handle(req, res);
});

export { router };
