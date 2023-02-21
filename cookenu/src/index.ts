import { app } from "./app";
import { UserController } from "./controller/UserController";
import { userRouter } from "./routes/userRouter";

const userController = new UserController();


// Rota para o user
app.use("/signup", userRouter)



