import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";

export class RecipeController {

    createRecipe = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: any = {
                // id: req.body.id,
                title: req.body.title,
                description: req.body.description,
                // createdAt: req.body.createdAt
            }

            const recipeBusiness = new RecipeBusiness()
            await recipeBusiness.createRecipe(input)

            res.status(201).send({ message: "Receita criada com sucesso!" })
        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}