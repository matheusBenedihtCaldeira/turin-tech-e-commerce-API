import { Router } from 'express';
import { RegisterProductController } from '../../../application/controllers/product/product-register.controller';
import { DeleteProductController } from '../../../application/controllers/product/product-delete.controller';
import { IndexProductController } from '../../../application/controllers/product/product-index.controller';
import { UpdateProductController } from '../../../application/controllers/product/product-update.controller';
import { GetProductController } from '../../../application/controllers/product/product-get.controller';
import userLoginRequired from '../../../application/middlewares/userLoginRequired';
import { PhotoController } from '../../../application/controllers/photo/photo-upload.controller';
import uploadsConfig from '../../../config/multer';
import multer from 'multer';
const router = Router();
const upload = multer(uploadsConfig);

router.get('/products', (req, res) => {
  new IndexProductController().handle(req, res);
});

router.get('/product/:id', (req, res) => {
  new GetProductController().handle(req, res);
});

router.post('/product/register', userLoginRequired, (req, res) => {
  new RegisterProductController().handle(req, res);
});

router.delete('/product/delete/:id', userLoginRequired, (req, res) => {
  new DeleteProductController().handle(req, res);
});

router.put('/product/edit/:id', userLoginRequired, (req, res) => {
  new UpdateProductController().handle(req, res);
});

router.post(
  '/photo/upload',
  userLoginRequired,
  upload.single('fileName'),
  (req, res) => {
    new PhotoController().handle(req, res);
  },
);
export { router };
