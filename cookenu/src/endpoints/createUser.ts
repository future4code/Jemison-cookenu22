import { Request, Response } from "express";


export const createUser = async (req: Request, res: Response) => {
   try {

      res.status(201).send({ message: "Usuário criado!" })
   } catch (error: any) {
      res.status(400).send(error.message)
   }
}