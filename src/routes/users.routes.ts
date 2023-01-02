import { Router } from 'express'
import { createDevController, updateDevController } from '../controllers/dev.controllers'
import { createRecruiterController, listRecruiterController, updateRecruiterController } from '../controllers/recruiter.controllers'
import { authenticationMiddleware } from '../middlewares/authentication.middleware'
import { ensureEmailIsUniqueMiddleware } from '../middlewares/ensureEmailIsUnique.middleware'
import { ensureUserIdMacthParamsIdMiddleware } from '../middlewares/ensureUserIdMatchParamsId.middleware'
    
export const userRoutes = Router()

userRoutes.post('/recruiter', ensureEmailIsUniqueMiddleware, createRecruiterController )
userRoutes.get('/recruiter/:id', authenticationMiddleware, 
                                listRecruiterController)
userRoutes.patch('/recruiter/:id', authenticationMiddleware,
                                    ensureUserIdMacthParamsIdMiddleware,
                                    updateRecruiterController)

userRoutes.post('/dev', ensureEmailIsUniqueMiddleware, createDevController)
userRoutes.patch('/dev/:id', authenticationMiddleware,
                            ensureUserIdMacthParamsIdMiddleware,
                            updateDevController)