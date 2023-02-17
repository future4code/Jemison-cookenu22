import { app } from "./app"
import { createUser } from './endpoints/createUser'
import { createTask } from './endpoints/createTask'


app.post('/create/user', createUser)

app.post('/task', createTask)


