import { Module } from '@nestjs/common';
import { PostalCodeService } from './postal-code.service';
import { PostalCodeController } from './postal-code.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostalCode } from './entities/postal-code.entity';

@Module({
  imports: [SequelizeModule.forFeature([PostalCode])],
  controllers: [PostalCodeController],
  providers: [PostalCodeService],
})
export class PostalCodeModule {}
