import { Request, Response } from "express";


const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body