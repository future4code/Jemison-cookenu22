import { CustomError } from "../error/CustomError";
import { task } from "../model/task";
import { InsertTaskInputDTO } from "../model/taskDTO";
import { BaseDatabase } from "./BaseDatabase";

export class TaskDatabase extends BaseDatabase {

    private taskTable = 'Architecture_Task'

    public insertTask = async (
        task: InsertTaskInputDTO
    ) => {
        try {
            TaskDatabase.connection.initialize()
            await TaskDatabase.connection(this.taskTable)
                .insert(task)
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }finally{
            TaskDatabase.connection.destroy();
         }
    }
    
    public getTasks = async () => {
        try {
            TaskDatabase.connection.initialize()
            const allTasks=await TaskDatabase.connection.select().from(this.taskTable)
            return allTasks;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }finally{
            TaskDatabase.connection.destroy();
         }
    }
}
