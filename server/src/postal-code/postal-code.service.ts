import { CreatePostalCodeDto } from './dto/create-postal-code.dto';
import { UpdatePostalCodeDto } from './dto/update-postal-code.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PostalCode } from './entities/postal-code.entity';


export class PostalCodeService {
  constructor(
    @InjectModel(PostalCode)
    private postalCodeRepository: typeof PostalCode,
  ) {}
  create(createPostalCodeDto: CreatePostalCodeDto) {
    return 'This action adds a new postalCode';
  }

  findAll() {
    return this.postalCodeRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} postalCode`;
  }

  update(id: number, updatePostalCodeDto: UpdatePostalCodeDto) {
    return `This action updates a #${id} postalCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} postalCode`;
  }
}
