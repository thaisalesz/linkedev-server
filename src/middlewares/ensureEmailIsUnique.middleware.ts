import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../data-source'
import { User } from '../entities/user'
import { AppError } from '../errors/appError'

export const ensureEmailIsUniqueMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const userData = req.body
    const userRepository = AppDataSource.getRepository(User)

    const emailAlreadyExists = await userRepository.findOneBy({email: userData.email})

    if(emailAlreadyExists){
        throw new AppError("Email already registered", 400)
    }

    return next()
}