import { Role, User } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";

interface IRegisterUserPayload{
    name: string;
    email: string;
    password: string;
}

const registerUser = async (payload: ) => {
    const { name, email, password } = payload;
    const user = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            role: Role.USER
        }
    })
    if (!data.user) {
        throw new Error("User registration failed");
    }
}