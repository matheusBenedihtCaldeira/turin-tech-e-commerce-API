import { Router } from 'express';
import { RegisterCustomerController } from '../../../application/controllers/customer-register.controller';
import { IndexCustomerController } from '../../../application/controllers/customer-index.controller';
import { UpdateCustomerController } from '../../../application/controllers/customer-update.controller';
import { DeleteCustomerController } from '../../../application/controllers/customer-delete.controller';
import { GetCustomerController } from '../../../application/controllers/get-customer.controller';
const router = Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

router.get('/customers/', (req, res) => {
  new IndexCustomerController().handle(req, res);
});

router.get('/customer/:id', (req, res) => {
  new GetCustomerController().handle(req, res);
});

router.post('/customer/register', (req, res) => {
  new RegisterCustomerController().handle(req, res);
});

router.put('/customer/edit/:id', (req, res) => {
  new UpdateCustomerController().handle(req, res);
});

router.delete('/customer/delete/:id', (req, res) => {
  new DeleteCustomerController().handle(req, res);
});
export default router;
