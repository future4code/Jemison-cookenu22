import { TaskDatabase } from "../data/TaskDatabase"
import { CustomError } from "../error/CustomError"
import { InsertTaskInputDTO, TaskInputDTO } from "../model/taskDTO"
import { generateId } from "../services/idGenerator"


export class TaskBusiness {

   public createTask = async (
      input: TaskInputDTO
   ) => {
      try {
         const { title, description, deadline, authorId } = input

         if (
            !title ||
            !description ||
            !deadline ||
            !authorId
         ) {
            throw new CustomError(400,'"title", "description", "deadline" e "authorId" são obrigatórios')
         }

         const id: string = generateId()

         const taskDatabase = new TaskDatabase()

         const taskInput: InsertTaskInputDTO = {
            id: id,
            title: title,
            description: description,
            deadline: deadline,
            author_id: authorId
         }

         await taskDatabase.insertTask(taskInput)

      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }
   //get task
   public getTasks = async () => {
      try {
         const taskDatabase = new TaskDatabase()
         return await taskDatabase.getTasks()
      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)
      }
   }
}
