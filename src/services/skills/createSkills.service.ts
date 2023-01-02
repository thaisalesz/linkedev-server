import { AppDataSource } from "../../data-source";
import { Skill } from "../../entities/skill";



export const createSkillsService = async (skills:string[]) => {
    const skillsRepository = AppDataSource.getRepository(Skill)

    const skillsList = await Promise.all(skills.map(async (skill) => {
        const skillExists = await skillsRepository.findOneBy({name: skill.toLowerCase()})

        if(skillExists){
            return skillExists
        }else{
            const newSkill = skillsRepository.create({name: skill.toLowerCase()})
            await skillsRepository.save(newSkill)
            return newSkill
       }
    })) 

    return skillsList
}