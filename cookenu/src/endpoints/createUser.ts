import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";


export const createUser = async (
   req: Request,
   res: Response
) => {
   try {
      const { name, email, password } = req.body

      if (
         !name ||
         !email ||
         !password
      ) {
         throw new Error('Preencha os campos "name","email" e "password"')
      }

      const id: string = Date.now().toString()

      await insertUser({
         id,
         name,
         email,
         password
      })

      res.status(201).send({ message: "Usuário criado!" })
   } catch (error:any) {
      res.status(400).send(error.message)
   }
}