import { Router } from "express";
import { RegisterProductController } from "../../application/controllers/product/product-register.controller";
import { DeleteProductController } from "../../application/controllers/product/product-delete.controller";
import { IndexProductController } from "../../application/controllers/product/product-index.controller";
import { UpdateProductController } from "../../application/controllers/product/product-update.controller";

const router = Router();

router.get('/products', (req,res) => {
    new IndexProductController().handle(req,res);
})

router.post('/product/register', (req,res) => {
    new RegisterProductController().handle(req,res)
})

router.delete('/product/delete/:id', (req,res) => {
    new DeleteProductController().handle(req,res)
})

router.put('/product/edit/:id', (req,res) => {
    new UpdateProductController().handle(req,res)
})
export {router}