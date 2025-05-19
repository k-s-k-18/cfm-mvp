import { Router } from "express";
import { emailLogin, emailRegister } from "../controllers/authControllers";


const authRouter = Router();

authRouter.post('/login-email',emailLogin);

authRouter.post('/register-email',emailRegister);

export default authRouter;

