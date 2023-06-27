import { Router } from 'express';
import { R2d2Controller } from '../../../application/controllers/r2d2.controller';

const router = Router();

router.post('/r2d2', (req, res) => {
  new R2d2Controller().handle(req, res);
});

export { router };
