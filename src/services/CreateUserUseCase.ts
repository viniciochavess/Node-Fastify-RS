import { hash } from "bcryptjs";
import { IUser, IUserRepository } from "../repositories/interfaceRepository";

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: IUser) {
    const { email, name, password } = user;
    const passwordHash = await hash(password, 8);
    this.userRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}
