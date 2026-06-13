import { Router } from "express";
import { CategoryController } from "./category.controller";



const router = Router()

router.post('/', CategoryController.createCategory)
router


export const CategoryRoutes = router