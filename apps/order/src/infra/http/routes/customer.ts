import { Router } from 'express';
import { CreateOrderController } from '../../../application/controllers/create-order.controller';
import { IndexOrdersController } from '../../../application/controllers/index-order.controller';

const router = Router();

router.get('/orders', (req, res) => {
  new IndexOrdersController().handle(req, res);
});

router.post('/order/create', (req, res) => {
  new CreateOrderController().handle(req, res);
});

export default router;
