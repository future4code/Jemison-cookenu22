import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidEmail, InvalidPassword } from "../error/UserErrors";
import { user } from "../model/user";
import { UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/idGenerator";


export class UserBusiness {
   public createUser = async (input: UserInputDTO) => {
      try {
         const userDatabase = new UserDatabase()
         const { name, nickname, email, password } = input
         if (
            !name ||
            !nickname ||
            !email ||
            !password
            ) {
               throw new CustomError(400,'Preencha os campos "name","nickname", "email" e "password"')
            }

         if(!email.includes("@")) {
             throw new InvalidEmail()
         }

         if(password.length <=6) {
            throw new InvalidPassword()
        }
            
            const id: string = generateId()
            
            const user:user = {
               id,
               name,
               nickname,
               email,
               password
            }

            await userDatabase.insertUser(user)
            
         } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
         }
   }
   public getUsers = async () => {

      try {
         const userDatabase = new UserDatabase()
         
         return await userDatabase.getUsers();
         
      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)

      }
   }
}
