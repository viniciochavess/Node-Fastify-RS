import { hash } from "bcryptjs";
import {
  IUser,
  IUserRepository,
  ResponseIUser,
} from "../repositories/interfaceRepository";
import { UserAlreadyExistsError } from "../errors/users-already-exists-error";


interface CreateUserUseCaseResponse{
  userResponse: ResponseIUser;

}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: IUser): Promise<CreateUserUseCaseResponse>{
    const findByEmail = await this.userRepository.findByEmail(user.email);
    if (findByEmail) {
      throw new UserAlreadyExistsError();
    }
    const { email, name, password } = user;
    const passwordHash = await hash(password, 8);
    const userCreate = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    const userResponse: ResponseIUser = {
      name: userCreate.name,
      email: userCreate.email,
      createdAt: userCreate.createdAt,
    };
    return {userResponse};
  }
}
