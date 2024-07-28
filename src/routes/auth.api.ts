import { Router } from "express";
import { registerController } from "../../src/controllers/auth.controllers";
import { registerValidation } from "../../src/validations/register.validation";

const router: Router = Router();

router.post("/register", registerValidation, registerController);

export const authRouter = router;