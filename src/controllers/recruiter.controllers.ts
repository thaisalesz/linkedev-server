import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import { IRecruiterRequest } from '../interfaces/recruiter'
import { createRecruiterService } from '../services/recruiter/createRecruiter.services'
import { listRecruiterService } from '../services/recruiter/listRecruiter.service'


export const createRecruiterController = async (req:Request, res: Response) => {
    const recruiterData: IRecruiterRequest = req.body
    const newRecruiter = await createRecruiterService(recruiterData)

    return res.status(201).json({ data: instanceToPlain(newRecruiter) })
}

export const listRecruiterController = async(req: Request, res: Response) => {
    const recruiterId = req.params.id
    const recruiter = await listRecruiterService(recruiterId)

    return res.status(200).json({ data:instanceToPlain(recruiter) })
}