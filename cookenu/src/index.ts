import { app } from "./app"
import { userRouter } from './routes/userRouter';
import { taskRouter } from './routes/taskRouter';


//Rotas para User
app.use("/user",userRouter)
//Rotas para User
app.use("/task",taskRouter)
