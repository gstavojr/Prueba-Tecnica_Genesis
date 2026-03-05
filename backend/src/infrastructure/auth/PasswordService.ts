import bcryp from 'bcrypt';
import { IPasswordService } from '../../domain/repositories/IPasswordService';


export class PasswordService implements IPasswordService {

  private readonly saltRounds = 10;

  async hash(plainPassword: string): Promise<string> {
    return await bcryp.hash(plainPassword, this.saltRounds);
  }


  async compare(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcryp.compare(plainPassword, hashedPassword);
  }

}