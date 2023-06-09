import { Router } from "express";
import { RegisterUserController } from "../../../application/controllers/user-register.controller";

const router = Router();

router.post('/user/register', (req, res) => {
    new RegisterUserController().handle(req,res);
})

export default router;