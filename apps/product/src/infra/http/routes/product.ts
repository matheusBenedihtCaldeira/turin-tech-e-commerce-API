import { Router } from 'express';
import { RegisterProductController } from '../../../application/controllers/product/product-register.controller';
import { DeleteProductController } from '../../../application/controllers/product/product-delete.controller';
import { IndexProductController } from '../../../application/controllers/product/product-index.controller';
import { UpdateProductController } from '../../../application/controllers/product/product-update.controller';
import { GetProductController } from '../../../application/controllers/product/product-get.controller';
import userLoginRequired from '../../../application/middlewares/userLoginRequired';

const router = Router();

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
export { router };
