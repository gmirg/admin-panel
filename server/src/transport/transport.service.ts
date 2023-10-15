import { Injectable } from '@nestjs/common';
import { CreateTransportDto } from './dto/create-transport.dto';
import { UpdateTransportDto } from './dto/update-transport.dto';
import { Transport } from './entities/transport.entity';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class TransportService {
    constructor(
      @InjectModel(Transport)
      private transportRepository: typeof Transport,
    ) {}

  create(createTransportDto: CreateTransportDto) {
    return 'This action adds a new transport';
  }

  findAll() {
    return this.transportRepository.findAll();
  }

  findOne(id: number) {
    return this.transportRepository.findOne();
  }

  update(id: number, updateTransportDto: UpdateTransportDto) {
    return `This action updates a #${id} transport`;
  }

  remove(id: number) {
    return `This action removes a #${id} transport`;
  }
}
