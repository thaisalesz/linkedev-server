import { Request, Response } from 'express'
import { IRecruiterRequest } from '../interfaces/recruiter'
import { createRecruiterService } from '../services/recruiter/recruiter.services'


export const createRecruiterController = async (req:Request, res: Response) => {
    const recruiterData: IRecruiterRequest = req.body
    const newRecruiter = await createRecruiterService(recruiterData)

    return res.status(201).json({ data: newRecruiter })
}