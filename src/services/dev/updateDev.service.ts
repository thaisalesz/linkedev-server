import { hashSync } from "bcrypt";
import { instanceToPlain } from "class-transformer";
import { AppDataSource } from "../../data-source";
import { Dev } from "../../entities/dev";
import { AppError } from "../../errors/appError";
import { IDevUpdate } from "../../interfaces/dev";
import { getOrCreateSkillsService } from "../skills/getOrCreateSkills.service";


export const updateDevService = async (data: IDevUpdate, devId: string) => {
    let checkKeys = Object.keys(data).map(
        item =>
          item.includes("name") ||
          item.includes("lastName") ||
          item.includes("password") ||
          item.includes("social") ||
          item.includes("avatarUrl") ||
          item.includes("title") ||
          item.includes("level") ||
          item.includes("skills")  
      );
    
    if (checkKeys.includes(false)) {
        throw new AppError("Invalid key", 401);
    }

    const devRepository = AppDataSource.getRepository(Dev)
    const dev = await devRepository.findOneBy({id: devId})

    const updatedSkills = data.skills && await getOrCreateSkillsService(data.skills) 
    
    if(dev){
        const newData = devRepository.merge(
            dev,
            {
                name: data.name ? data.name : dev.name,
                lastName: data.lastName ? data.lastName : dev.lastName,
                password: data.password ? hashSync(data.password, 10) : dev.password,
                social: data.social ? data.social : dev.social,
                avatarUrl: data.avatarUrl ? data.avatarUrl : dev.avatarUrl,
                title: data.title ? data.title : dev.title,
                level: data.level ? data.level : dev.level,
                skills: data.skills ? updatedSkills : dev.skills
            }
        )
        await devRepository.save(newData)
    }

    const updatedDev = await devRepository.findOne({
        where: {
            id: devId
        },
        relations: {
            skills: true            
        }
    })

    return instanceToPlain(updatedDev)
}