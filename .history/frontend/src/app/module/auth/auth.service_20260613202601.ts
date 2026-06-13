import { User } from "../../../generated/prisma/client";



const registerUser = async (payload: User) => {
    const { name, email, password } = payload;
    const user = 
}