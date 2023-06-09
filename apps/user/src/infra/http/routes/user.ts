import { Router } from "express";
import { RegisterUserController } from "../../../application/controllers/user-register.controller";
import { UserUpdateController } from "../../../application/controllers/user-update.controller";
import { UserIndexController } from "../../../application/controllers/user-index.controller";
const router = Router();

router.post('/user/register', (req, res) => {
    new RegisterUserController().handle(req,res);
})
router.put('/user/edit/:id', (req, res) => {
    new UserUpdateController().handle(req,res);
})

router.get('/users/', (req,res) => {
    new UserIndexController().handle(req,res);
})

export default router;