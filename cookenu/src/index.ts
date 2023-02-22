import { app } from "./app";
import { userRouter } from "./routes/userRouter";


// Rota para o user
app.use("/", userRouter)

// Rota para o recipe
app.use("/crate", userRouter)


