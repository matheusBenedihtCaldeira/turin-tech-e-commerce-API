import { Router } from 'express';
import { R2d2Controller } from '../../../application/controllers/r2d2.controller';
import customerLogin from '../../../application/middlewares/customerLogin';
const router = Router();

router.post('/r2d2', customerLogin, (req, res) => {
  new R2d2Controller().handle(req, res);
});

export { router };
