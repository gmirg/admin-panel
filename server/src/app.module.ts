import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ShipmentModule } from './shipment/shipment.module';
import { PackageModule } from './package/package.module';
import { TransportModule } from './transport/transport.module';
import { dataBaseConfig } from './database/database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostalCodeModule } from './postal-code/postal-code.module';

@Module({
  imports: [UserModule, ShipmentModule, PackageModule, TransportModule, SequelizeModule.forRoot(dataBaseConfig), PostalCodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
