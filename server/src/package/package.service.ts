import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Package } from './entities/package.entity';

export class PackageService {
  constructor(
    @InjectModel(Package)
    private packageRepository: typeof Package,
  ) {}
  create(createPackageDto: CreatePackageDto) {
    return 'This action adds a new package';
  }

  findAll() {
    return this.packageRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} package`;
  }

  update(id: number, updatePackageDto: UpdatePackageDto) {
    return `This action updates a #${id} package`;
  }

  remove(id: number) {
    return `This action removes a #${id} package`;
  }
}
