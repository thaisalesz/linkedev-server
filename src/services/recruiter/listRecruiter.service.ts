import { instanceToPlain } from "class-transformer"
import { AppDataSource } from "../../data-source"
import { Recruiter } from "../../entities/recruiter"
import { AppError } from "../../errors/appError"


export const listRecruiterService = async (id: string) => {
    const recruiterRepository = AppDataSource.getRepository(Recruiter)
    const recruiter = await recruiterRepository.findOneBy({id})

    if(!recruiter){
        throw new AppError("Id does not match with an registered recruiter", 404)
    }

    return instanceToPlain(recruiter)
}