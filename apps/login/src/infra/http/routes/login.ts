import { Router } from 'express';
import { AuthenticateUserController } from '../../../application/controllers/AuthenticateUserController';
import { AuthenticateCustomerController } from '../../../application/controllers/AuthenticateCustomerController';

const router = Router();

router.post('/login/user', (req, res) => {
  new AuthenticateUserController().handle(req, res);
});
router.post('/login/customer', (req, res) => {
  new AuthenticateCustomerController().handle(req, res);
});
export default router;
