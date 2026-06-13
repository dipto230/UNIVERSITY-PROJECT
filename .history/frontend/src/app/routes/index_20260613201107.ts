import { Router } from "express";
import { CategoryRoutes } from "../module/category/category.routes";
import { AuthRoutes } from "../module/auth/auth.routes";


const router = Router()

router.use('/auth', AuthRoutes)
router.use('/categories', CategoryRoutes)

export const IndexRoutes = router