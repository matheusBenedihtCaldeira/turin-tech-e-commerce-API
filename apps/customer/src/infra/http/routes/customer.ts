import { Router } from "express";
import { RegisterCustomerController } from "../../../application/controllers/user-register.controller";

const router = Router();

router.get('/', (req, res) => {
    res.send("Hello world")
})

router.post('/customer/register', (req, res) => {
    new RegisterCustomerController().handle(req, res);
})
export default router;