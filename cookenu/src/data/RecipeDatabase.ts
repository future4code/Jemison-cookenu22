import { BaseDatabase } from "./BaseDatabase";
import { recipe } from "../types/recipe";

export class RecipeDatabase extends BaseDatabase {

    insertRecipe = async (recipe: recipe): Promise<void> => {
        try {
            await RecipeDatabase.connection.insert({
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                createdAt: recipe.createdAt
            }).into('Architecture_Recipe')
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}