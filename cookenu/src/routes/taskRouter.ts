import { TaskController } from './../controller/TaskController';
import express from "express";

const taskController=new TaskController();

export const taskRouter= express.Router();

taskRouter.get("/getAll",taskController.getTasks)
taskRouter.post("/",taskController.createTask)