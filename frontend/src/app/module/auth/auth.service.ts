import { Role } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

interface IRegisterUserPayload{
    name: string;
    email: string;
    password: string;
}

const registerUser = async (payload: IRegisterUserPayload) => {
    const { name, email, password } = payload;
    const data = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            role: Role.CUSTOMER
        }
    })
    if (!data.user) {
        throw new Error("User registration failed");
    }
    const user = await prisma.$transaction(async (tx) => {
       const customer = await tx.customer.create({
           data: {
               userId: data.user.id,
               name: payload.name,
               email: payload.email,
               password:payload.password
               
                
            }
       })
        return customer
    })
    return {
        ...data,
        user
    }
}

export const AuthService = {
    registerUser
}