import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";


export const ensureUserIdMacthParamsIdMiddleware = 
    async (req: Request, res: Response, next: NextFunction) => {
        const paramsId = req.params.id
        const userId = req.user.id

        if(paramsId === userId){
           return next()
        }

        throw new AppError("Unauthorized", 403)
}