import { app } from "./app";
import { userRouter } from "./routes/userRouter";
import { recipeRouter } from "./routes/recipeRouter";

// Rota para o user
app.use("/create", userRouter)

// Rota para o recipe
app.use("/create", recipeRouter)


