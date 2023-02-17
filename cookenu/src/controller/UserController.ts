import { Request, Response } from "express";

export class UserController {

    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            };

            res.status(201).send({ message: "Usuário criado!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}