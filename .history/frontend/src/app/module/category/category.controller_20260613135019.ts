/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { CategoryService } from "./category.service";


const createCategory = async (req: Request, res: Response) => {
    try {
        const payload = req.body
    const result = await CategoryService.createCategory(payload)
    res.status(201).json({
        success: true,
        message: 'Category created successfully',
        data: result
    })
    } catch (error: any) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Failed to create category',
            error: error.message
      }) 
    }
}


const getAllCategories = async (req: Request, res: Response) => {
    try {
        const ca
                
            } catch (error: any) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Failed to create category',
            error: error.message
      }) 
    }
}



export const CategoryController = {
    createCategory
}