import { Router } from 'express';
import { CreateOrderController } from '../../../application/controllers/create-order.controller';
import { IndexOrdersController } from '../../../application/controllers/index-order.controller';
import { UpdateOrderController } from '../../../application/controllers/update-order-controller';
import { GetOrderByIdController } from '../../../application/controllers/get-order.controller';

const router = Router();

router.get('/orders', (req, res) => {
  new IndexOrdersController().handle(req, res);
});

router.get('/order/:id', (req, res) => {
  new GetOrderByIdController().handle(req, res);
});

router.post('/order/create', (req, res) => {
  new CreateOrderController().handle(req, res);
});

router.put('/orders/edit', (req, res) => {
  new UpdateOrderController().handle(req, res);
});

export default router;
