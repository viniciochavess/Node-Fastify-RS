import { primsa } from "../../database";
import { IUser, IUserRepository, ResponseIUser } from "../interfaceRepository";

export class PrismaUserRepository implements IUserRepository {
  async create(user: IUser): Promise<ResponseIUser> {
    console.log(user);
    const { email, name, password } = user;
    const userCreate = await primsa.user.create({
      data: { email, name, password },
    });
    return userCreate;
  }
}
