import { Router } from 'express'
import { createRecruiterController, listRecruiterController } from '../controllers/recruiter.controllers'
import { authenticationMiddleware } from '../middlewares/authentication.middleware'
import { ensureEmailIsUniqueMiddleware } from '../middlewares/ensureEmailIsUnique.middleware'
    
export const userRoutes = Router()

userRoutes.post('/recruiter', ensureEmailIsUniqueMiddleware, createRecruiterController )
userRoutes.get('/recruiter/:id', authenticationMiddleware, listRecruiterController)