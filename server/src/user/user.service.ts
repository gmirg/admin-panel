import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  findAll() {
    return this.userRepository.findAll()
  }

  findOne(id: number) : Promise<User | null > {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });;
  }
  findOneByEmail(email: string) : Promise<User | null > {
    return this.userRepository.findOne({
      where: {
        email,
      },
    });;
  }
  
}
