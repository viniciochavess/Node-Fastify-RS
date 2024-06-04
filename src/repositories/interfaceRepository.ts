export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface ResponseIUser {
  name: string;
  email: string;
  createdAt: Date;
}

export interface IUserRepository {
  create(user: IUser): Promise<ResponseIUser>;
}
