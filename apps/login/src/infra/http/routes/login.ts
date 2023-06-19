import { Router } from 'express';
import { AuthenticateUserController } from '../../../application/controllers/AuthenticateUserController';

const router = Router();

router.get('/teste', (req, res) => {
  res.send('Teste');
});

router.post('/login/user', (req, res) => {
  new AuthenticateUserController().handle(req, res);
});
export default router;
