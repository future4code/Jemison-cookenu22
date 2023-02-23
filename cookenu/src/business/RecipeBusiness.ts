import { RecipeDatabase } from "../data/RecipeDatabase";
import { RecipeInputDTO } from "../model/recipeDTO";
import { generateId } from "../services/idGenerator";


export class RecipeBusiness {

    public createRecipe = async (input: RecipeInputDTO): Promise<void> => {
        try {
            const { title, description, createdAt } = input;

            const id: string = generateId()

            const recipeDatabase = new RecipeDatabase
            await recipeDatabase.insertRecipe({
                id,
                title,
                description,
                createdAt,
            })
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}