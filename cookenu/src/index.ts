import { app } from "./app";
import { userRouter } from "./routes/userRouter";


// Rota para o user
app.use("/user", userRouter)



