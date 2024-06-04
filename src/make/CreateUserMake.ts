import { PrismaUserRepository } from "../repositories/prismaRepository";
import { CreateUserUseCase } from "../services/CreateUserUseCase";

const prismaUserRepository = new PrismaUserRepository();
const createUserMake = new CreateUserUseCase(prismaUserRepository);
export default createUserMake;
