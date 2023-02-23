import { RecipeDatabase } from "../data/RecipeDatabase";
import { InsertRecipeInputDTO, RecipeInputDTO } from "../model/recipeDTO";
import { generateId } from "../services/idGenerator";


export class RecipeBusiness {

    public createRecipe = async (input: RecipeInputDTO): Promise<void> => {
        try {
            const { title, description, createdAt } = input;

            const id: string = generateId()

            const recipeDatabase = new RecipeDatabase

            const recipeInput: InsertRecipeInputDTO = {
                id: id,
                title: title,
                description: description,
                createdAt: createdAt
            }

            await recipeDatabase.insertRecipe(recipeInput)
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}