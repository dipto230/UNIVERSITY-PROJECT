import { prisma } from "../../lib/prisma"





const createCategory = async (payload: category): Promise<Category> => {
    const category = await prisma.category.create({

    })
}