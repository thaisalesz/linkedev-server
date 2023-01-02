import { instanceToPlain } from "class-transformer"
import { AppDataSource } from "../../data-source"
import { Dev } from "../../entities/dev"
import { AppError } from "../../errors/appError"


export const listDevService = async (devId: string) => {
    const devRepository = AppDataSource.getRepository(Dev)
    const dev = await devRepository.findOne({
        where: {id: devId},
        relations: {skills: true}
    })

    if(!dev){
        throw new AppError("Id does not match a registered Developer", 404)
    }

    return instanceToPlain(dev)
}