import { Router } from "express";
import { CategoryRoutes } from "../module/category/category.routes";


const router = Router()

router.use('/categories', CategoryRoutes)

export const 