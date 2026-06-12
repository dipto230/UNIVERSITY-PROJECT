import { prisma } from "../../lib/prisma"





const createCategory = async (payload: category): Promise<category> => {
    const category = await prisma.category.create({

    })
}