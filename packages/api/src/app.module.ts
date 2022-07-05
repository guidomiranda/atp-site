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
import { ReviewController } from './review/review.controller';
import { ReviewService } from './review/review.service';
import { SuccessController } from './success/success.controller';
import { SuccessService } from './success/success.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [],
  controllers: [
    AppController,
    BannerController,
    ClientsController,
    FilterController,
    ProductController,
    ReviewController,
    CategoryController,
    SuccessController,
    UserController,
  ],
  providers: [
    AppService,
    BannerService,
    ClientsService,
    FilterService,
    ProductService,
    CategoryService,
    ReviewService,
    SuccessService,
    UserService,
    JwtService,
    PrismaService,
  ],
})
export class AppModule {}
