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
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [UserModule, ShipmentModule, PackageModule, TransportModule, SequelizeModule.forRoot(dataBaseConfig),ConfigModule.forRoot(), PostalCodeModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
