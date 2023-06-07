import { Router } from "express";
import { RegisterProductController } from "../../application/controllers/product-register.controller";

const router = Router();

router.get('/', (req,res) => {
    res.send("Hello world!");
})

router.post('/product/register', (req,res) => {
    new RegisterProductController().handle(req,res)
})
export {router}