import { user } from "../model/user"

// interface que a camada data deverá seguir
export interface UserRepository {
    insertUser(user: user): Promise<void>

    getUsers(): Promise<user[]>
}