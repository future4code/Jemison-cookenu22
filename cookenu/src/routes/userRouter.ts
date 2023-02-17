import { UserController } from './../controller/UserController';
import express from "express";
import { UserBusiness } from '../business/UserBusiness';
import { UserDatabase } from '../data/UserDatabase';

export const userRouter = express.Router();

const userDabase = new UserDatabase()
const userBusiness = new UserBusiness(userDabase)
const userController = new UserController(userBusiness);


userRouter.get("/getAll", (req, res) => userController.getUsers(req, res))
userRouter.post("/user/create", (req, res) => userController.createUser(req, res))
