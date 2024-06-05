import { primsa } from "../../database";
import { IUser, IUserRepository, ResponseIUser } from "../interfaceRepository";

export class PrismaUserRepository implements IUserRepository {
  async findByEmail(email: string): Promise<ResponseIUser | null> {
    const emailUser = await primsa.user.findUnique({ where: { email } });
    if (!emailUser) {
      return null;
    }
    return emailUser;
  }

  async create(user: IUser): Promise<ResponseIUser> {
    const { email, name, password } = user;
    const userCreate = await primsa.user.create({
      data: { email, name, password },
    });
    return userCreate;
  }
}
