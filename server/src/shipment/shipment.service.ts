import { Injectable } from '@nestjs/common';
import { CreateShipmentDto } from './dto/create-shipment.dto';
import { UpdateShipmentDto } from './dto/update-shipment.dto';
import { Shipment } from './entities/shipment.entity';
import { InjectModel } from '@nestjs/sequelize'; 

@Injectable()
export class ShipmentService {
  constructor(
    @InjectModel(Shipment)
    private shipmentRepository: typeof Shipment,
  ) {}

  create(createShipmentDto: CreateShipmentDto) {
    return this.shipmentRepository.create(createShipmentDto as any)
  }

  findAll() {
    return this.shipmentRepository.findAll();
  }

  findOne(id: number) : Promise<Shipment | null > {
    return this.shipmentRepository.findOne({
      where: {
        id,
      },
    });;
  }

  update(id: number, updateShipmentDto: UpdateShipmentDto) {
    return `This action updates a #${id} shipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} shipment`;
  }
}
