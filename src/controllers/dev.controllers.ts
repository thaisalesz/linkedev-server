import { Request, Response } from "express";
import { IDevRequest, IDevUpdate } from "../interfaces/dev";
import { createDevService } from "../services/dev/createDev.service";
import { listDevService } from "../services/dev/listDev.service";
import { updateDevService } from "../services/dev/updateDev.service";


export const createDevController = async (req: Request, res: Response) => {
    const devData: IDevRequest = req.body
    const dev = await createDevService(devData)

    return res.status(201).json({ data: dev })
}

export const listDevController = async (req:Request, res: Response) => {
    const devId = req.params.id
    const dev = await listDevService(devId)

    return res.status(200).json({ data: dev })
}

export const updateDevController = async (req: Request, res: Response) => {
    const devId: string = req.params.id
    const devData: IDevUpdate = req.body
    const updatedDev = await updateDevService(devData, devId)

    return res.status(200).json({ data: updatedDev })
}