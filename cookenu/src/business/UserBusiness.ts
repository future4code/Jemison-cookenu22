import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidEmail, InvalidPassword } from "../error/UserErrors";
import { UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/idGenerator";


export class UserBusiness {

    // Cria o método createUser
    createUser = async (input: UserInputDTO): Promise<void> => {
        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new CustomError(400, 'Preencha os campos "name","email" e "password"')
            }

            if (password.length < 6) {
                throw new InvalidPassword()
            }

            if (!email.includes("@")) {
                throw new InvalidEmail();
            }

            const id: string = generateId()

            const user = {
                id,
                name,
                email,
                password
            }

            // Cria instância
            const userDatabase = new UserDatabase()

            await userDatabase.insertUser(user)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    }
} 
