import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { PrismaService } from '../prisma/prisma.service';
import { urlencoded, json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  const server = await app.listen(8080);
  server.setTimeout(18000000000);
}
bootstrap();
