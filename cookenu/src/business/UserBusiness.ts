import { Request, Response } from "express";

export class UserBusiness {

    // Cria o método createUser
    createUser = async (input: any): Promise<void> => {
        try {
            const { name, email, password } = req.body

            if (!name || !email || !password) {
                throw new Error('Preencha os campos "name","email" e "password"')
            }

            const id: string = Date.now().toString()

            await insertUser({
                id,
                name,
                email,
                password
            })
        }
    }
} catch (error: any) {
    throw new Error(error.message);

}
