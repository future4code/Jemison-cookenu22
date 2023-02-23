import { BaseDatabase } from "./BaseDatabase";
import { recipe } from "../model/recipe";
import { InsertRecipeInputDTO } from "../model/recipeDTO";
import { CustomError } from "../error/CustomError";

export class RecipeDatabase extends BaseDatabase {

    private recipeTable = 'Architeture_Recipe'

    public insertRecipe = async (recipe: InsertRecipeInputDTO): Promise<void> => {
        try {
            RecipeDatabase.connection.initialize()
            await RecipeDatabase.connection(this.recipeTable)
                .insert(recipe)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }
}