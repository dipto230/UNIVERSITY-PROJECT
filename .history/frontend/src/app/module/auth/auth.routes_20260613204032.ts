import { Router } from "express";
import { AuthController } from "./auth.controller";
const router = Router();
router.post("/register", AuthController.registerUser(req, res, next))
export const AuthRoutes = router;
