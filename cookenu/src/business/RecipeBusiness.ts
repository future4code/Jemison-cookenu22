import { RecipeDatabase } from "../data/RecipeDatabase";


export class RecipeBusiness {

    createRecipe = async (input: any): Promise<void> => {
        try {
            const { title, description, createdAt } = input;

            const id: string = Date.now().toString()

            const recipeDatabase = new RecipeDatabase
            await recipeDatabase.insertRecipe({
                id,
                title,
                description,
                createdAt,
            })
        } catch (error: any) {
            throw new Error(error.messag);
        }
    }
}