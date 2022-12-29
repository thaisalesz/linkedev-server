import { NextFunction, Request } from "express";


export const ensureUserIdMacthParamsIdMiddleware = 
    async (req: Request, res: Response, next: NextFunction) => {
        const paramsId = req.params.id
        const userId = req.user.id

        
}