import { User, UserPublic } from '../entities/User';


export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  findById(id: number): Promise<UserPublic | null>;
  create(user: User): Promise<UserPublic>;
}