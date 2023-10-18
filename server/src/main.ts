import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { requestLoggerMiddleware } from './request-logger/request-logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200', // Replace with the URL of your Angular frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization',
    credentials: true,
  };
  app.enableCors(corsOptions);
  
  app.use(requestLoggerMiddleware);

  await app.listen(3000);
}
bootstrap();
