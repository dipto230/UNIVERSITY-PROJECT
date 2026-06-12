import { prisma } from "../../lib/prisma"





const createCategory = async (payload: Category): Promise<category> => {
    const category = await prisma.category.create({

    })
}