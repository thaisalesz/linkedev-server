import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import { errorMiddleware } from './middlewares/error.middleware'
import { userRoutes } from './routes/users.routes'
import { loginRoutes } from './routes/login.routes'
 

const app = express()    
app.use(express.json())

app.use('/users', userRoutes)
app.use('/login', loginRoutes)
   
app.use(errorMiddleware)
    
export default app