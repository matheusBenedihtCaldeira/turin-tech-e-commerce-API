import { Router } from "express";
import { RegisterUserController } from "../../../application/controllers/user/user-register.controller";
import { UserUpdateController } from "../../../application/controllers/user/user-update.controller";
import { UserIndexController } from "../../../application/controllers/user/user-index.controller";
import { UserDeleteController } from "../../../application/controllers/user/user-delete.controller";
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

router.delete('/users/edit/delete/:id', (req,res) => {
    new UserDeleteController().handle(req,res);
})
export default router;