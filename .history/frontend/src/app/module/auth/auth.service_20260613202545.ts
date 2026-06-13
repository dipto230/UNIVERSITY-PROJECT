import { User } from "../../../generated/prisma/client";



const registerUser = async (payload: User) => {
    const { name, email, password } = payload;
`    // Implement registration logic here, e.g., save user to database
}