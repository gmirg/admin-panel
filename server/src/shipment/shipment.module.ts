import { Module } from '@nestjs/common';
import { ShipmentService } from './shipment.service';
import { ShipmentController } from './shipment.controller';
import { Shipment } from './entities/shipment.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Shipment])],
  controllers: [ShipmentController],
  providers: [ShipmentService],
})
export class ShipmentModule {}
