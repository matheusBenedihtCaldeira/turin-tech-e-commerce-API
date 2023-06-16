import { Router } from 'express';
import { CreateOrderController } from '../../../application/controllers/create-order.controller';

const router = Router();

router.get('/teste', (req, res) => {
  res.send('Hello World');
});

router.post('/pedidos/create', (req, res) => {
  new CreateOrderController().handle(req, res);
});

export default router;
