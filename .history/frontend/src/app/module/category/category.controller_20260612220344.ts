import { Request, Response } from "express";
import { CategoryService } from "./category.service";


const createCategory = async (req: Request, res: Response) => {
    const payload = req.body
    const result = await CategoryService.createCategory(payload)
    res.status(201).json({
        success: true,
        message: 'Category created successfully',
        data: result
    })
}



export const 