import { Request, Response } from "express";
import { IDevRequest } from "../interfaces/dev";
import { createDevService } from "../services/dev/createDev.service";


export const createDevController = async (req: Request, res: Response) => {
    const devData: IDevRequest = req.body
    const dev = await createDevService(devData)

    return res.status(201).json({ data: dev })
}