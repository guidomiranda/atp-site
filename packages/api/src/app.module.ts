import { Module } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BannerService } from './banner/banner.service';
import { BannerController } from './banner/banner.controller';
import { ClientsController } from './client/client.controller';
import { ClientsService } from './client/client.service';
import { FilterController } from './filter/filter.controller';
import { FilterService } from './filter/filter.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    BannerController,
    ClientsController,
    FilterController,
    ProductController,
    CategoryController,
  ],
  providers: [
    AppService,
    BannerService,
    ClientsService,
    FilterService,
    ProductService,
    CategoryService,
    PrismaService,
  ],
})
export class AppModule {}
