import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { join } from 'path'; 

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: '.db/invent.sqlite3',
  models: [join(__dirname, '**/*.entity.ts')], 
  autoLoadModels: true,
  synchronize: false,
};