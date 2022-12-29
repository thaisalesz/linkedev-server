import { hashSync } from "bcrypt";
import { AppDataSource } from "../../data-source";
import { Recruiter } from "../../entities/recruiter";
import { AppError } from "../../errors/appError";
import { IRecruiterRequest } from "../../interfaces/recruiter";


export const createRecruiterService = async (data: IRecruiterRequest) => {
    if(Object.keys(data).length < 6 ){
        throw new AppError("Required field is missing")
    }
    
    let checkKeys = Object.keys(data).map(
        item => 
        item.includes("name") ||
        item.includes("email") ||
        item.includes("password") ||
        item.includes("social") ||
        item.includes("avatarUrl") ||
        item.includes("role") ||
        item.includes("company")
    )

    if(checkKeys.includes(false)){
        throw new AppError("Invalid Key")
    }
    
    const hashPassword = hashSync(data.password, 10)   

    const recruiterRepository = AppDataSource.getRepository(Recruiter)
    const newRecruiter = recruiterRepository.create({...data, password: hashPassword})
    await recruiterRepository.save(newRecruiter)

    return newRecruiter
}