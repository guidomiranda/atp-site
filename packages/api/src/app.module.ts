import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/prisma.service';
import { BannerService } from './banner/banner.service';
import { BannerController } from './banner/banner.controller';
import { ClientsController } from './client/client.controller';
import { ClientsService } from './client/client.service';

@Module({
  imports: [],
  controllers: [AppController, BannerController, ClientsController],
  providers: [AppService, BannerService, ClientsService, PrismaService],
})
export class AppModule {}
