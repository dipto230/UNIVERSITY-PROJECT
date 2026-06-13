/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, RequestHandler, Response } from "express";
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


const catchAsync = (fn: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: 'Failed to fetch'
            })
        }
    }
}

































const getAllCategories = async (req: Request, res: Response) => {
    try {
        const categories = await CategoryService.getAllCategories()
        res.status(200).json({
            success: true,
            message: 'Categories retrieved successfully',
            data: categories
        })
                
            } catch (error: any) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve categories',
            error: error.message
      }) 
    }
}


const deleteCategory = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await CategoryService.deleteCategory(id as string);
        res.status(200).json({
            success: true,
            message: 'Category deleted successfully',
            data: result
        })
    } catch (error: any) {
         console.log(error)
        res.status(500).json({
            success: false,
            message: 'Failed to delete category',
            error: error.message
      }) 
    }
}


export const CategoryController = {
    createCategory,
    getAllCategories,
    deleteCategory
}