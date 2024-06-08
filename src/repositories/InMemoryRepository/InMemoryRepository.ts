import { IUser, IUserRepository, ResponseIUser } from "../interfaceRepository";

export class InMemoryRepository implements IUserRepository{
 
    constructor( private  database:IUser[] = []){}
    create(user: IUser): any {
        const userCreate = {
            ...user,
            createdAt: new Date()
        
        }

        
        return {userCreate}
    }
    findByEmail(email: string): any {
       const user = this.database.find(user => user.email === email);
         if (!user) {
              return null;
         }
        return user;
    }
}