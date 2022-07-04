import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from '../prisma/prisma.service';
import { BannerService } from './banner/banner.service';
import { BannerController } from './banner/banner.controller';
import { ClientsController } from './client/client.controller';
import { ClientsService } from './client/client.service';
import { FilterController } from './filter/filter.controller';
import { FilterService } from './filter/filter.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    BannerController,
    ClientsController,
    FilterController,
  ],
  providers: [
    AppService,
    BannerService,
    ClientsService,
    FilterService,
    PrismaService,
  ],
})
export class AppModule {}
