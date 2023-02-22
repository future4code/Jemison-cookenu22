import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";

export class UserController {

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: UserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };

            // Cria instância
            const userBusiness = new UserBusiness()

            // Chama o método userBusiness
            await userBusiness.createUser(input)

            res.status(201).send({ message: "Usuário criado!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}