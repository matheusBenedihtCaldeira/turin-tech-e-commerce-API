import { Router } from 'express';
import { CreateOrderController } from '../../../application/controllers/create-order.controller';
import { IndexOrdersController } from '../../../application/controllers/index-order.controller';
import { UpdateOrderController } from '../../../application/controllers/update-order-controller';
import { GetOrderByIdController } from '../../../application/controllers/get-order.controller';
import customerLogin from '../../../application/middleware/customerLogin';

const router = Router();

router.get('/orders', customerLogin, (req, res) => {
  new IndexOrdersController().handle(req, res);
});

router.get('/order/:id', customerLogin, (req, res) => {
  new GetOrderByIdController().handle(req, res);
});

router.post('/order/create', customerLogin, (req, res) => {
  new CreateOrderController().handle(req, res);
});

router.put('/orders/edit', customerLogin, (req, res) => {
  new UpdateOrderController().handle(req, res);
});

export default router;
