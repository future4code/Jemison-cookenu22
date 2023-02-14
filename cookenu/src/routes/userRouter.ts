import { UserController } from './../controller/UserController';
import express from "express";
import { UserBusiness } from '../business/UserBusiness';
import { UserDatabase } from '../data/UserDatabase';


const userDabase = new UserDatabase()
const userBusiness = new UserBusiness(userDabase)
const userController = new UserController(userBusiness);

export const userRouter = express.Router();

userRouter.get("/getAll", userController.getUsers)
userRouter.post("/create", userController.createUser)
