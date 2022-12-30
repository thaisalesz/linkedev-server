import { hashSync } from "bcrypt";
import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../../data-source";
import { Dev } from "../../entities/dev";
import { AppError } from "../../errors/appError";
import { IDevRequest } from "../../interfaces/dev";
import { createSkillsService } from "../skills/createSkills.service";

export const createDevService = async (data: IDevRequest) => {
    if(Object.keys(data).length < 10 ){
        throw new AppError("Required field is missing")
    }
    
    let checkKeys = Object.keys(data).map(
        item => 
        item.includes("name") ||
        item.includes("lastName") ||
        item.includes("email") ||
        item.includes("password") ||
        item.includes("social") ||
        item.includes("avatarUrl") ||
        item.includes("role") ||
        item.includes("level") ||
        item.includes("title") ||
        item.includes("skills")
    )

    if(checkKeys.includes(false)){
        throw new AppError("Invalid Key")
    }

    const devRepository = AppDataSource.getRepository(Dev)
    const hashPassword = hashSync(data.password, 10)

    const skills = await createSkillsService(data.skills)
    const newDev = devRepository.create({
        ...data,
        password: hashPassword,
        skills: skills
    })
    await devRepository.save(newDev)

    return instanceToPlain(newDev)
}