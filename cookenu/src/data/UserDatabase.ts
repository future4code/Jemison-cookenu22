import { BaseDatabase } from "./BaseDatabase";
import { user } from "../model/user"
import { CustomError } from "../error/CustomError";

export class UserDatabase extends BaseDatabase {

    insertUser = async (user: user): Promise<void> => {
        try {
            await UserDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into('Architecture_User')
        } catch (error: any) {
            throw new CustomError(error.status, error.message)
        }
    }
}