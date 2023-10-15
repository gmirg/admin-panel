import { Module } from '@nestjs/common';
import { TransportService } from './transport.service';
import { TransportController } from './transport.controller';
import { Transport } from './entities/transport.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Transport])],
  controllers: [TransportController],
  providers: [TransportService],
})
export class TransportModule {}
