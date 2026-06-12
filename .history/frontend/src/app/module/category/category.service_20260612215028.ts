import { prisma } from "../../lib/prisma"





const createCategory = async (payload: Category): Promise<Category> => {
    const category = await prisma.category.create({
        
    })
}