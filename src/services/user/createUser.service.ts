import { AppDataSource } from "../../data-source"
import { User } from "../../entities/user"
import { IUserRequest } from "../../interfaces/user"


export const createUserService = async (data: IUserRequest) => {
    const userRepository = AppDataSource.getRepository(User)
    const newUser = userRepository.create(data)
    await userRepository.save(newUser)
    return newUser
}