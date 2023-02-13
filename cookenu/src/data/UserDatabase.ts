import { CustomError } from "../error/CustomError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

   private userTable = 'Architecture_User'
   
   
   public insertUser = async (
      user: user
      ) => {
      try {
         UserDatabase.connection.initialize()
         await UserDatabase.connection.insert({
            id: user.id,
            name: user.name,
            nickname: user.nickname,
            email: user.email,
            pass_word: user.password
         }).into(this.userTable)
      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)
      }finally{
         UserDatabase.connection.destroy();
      }

   }
   
   
   public getUsers = async (): Promise<user[]> => {
      try {
         //inia conexão
         UserDatabase.connection.initialize()

         const allUsers=await UserDatabase.connection.select().from('Architecture_User');

         return allUsers;
      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)
      }finally{         
         UserDatabase.connection.destroy();
      }

   }

}
