import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

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
import { LubVehLivianoController } from './lub-veh-liviano/lub-veh-liviano.controller';
import { LubVehLivianoService } from './lub-veh-liviano/lub-veh-liviano.service';
import { LubMotoController } from './lub-moto/lub-moto.controller';
import { LubMotoService } from './lub-moto/lub-moto.service';
import { LubAuxController } from './lub-aux/lub-aux.controller';
import { LubAuxService } from './lub-aux/lub-aux.service';
import { LubVehPesadoController } from './lub-veh-pesado/lub-veh-pesado.controller';
import { LubVehPesadoService } from './lub-veh-pesado/lub-veh-pesado.service';
import { FiltrosController } from './filtros/filtros.controller';
import { FiltrosService } from './filtros/filtros.service';

@Module({
  controllers: [
    AppController,
    BannerController,
    ClientsController,
    FilterController,
    ProductController,
    ReviewController,
    CategoryController,
    SuccessController,
    LubVehLivianoController,
    UserController,
    LubMotoController,
    LubAuxController,
    LubVehPesadoController,
    FiltrosController,
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
    LubVehLivianoService,
    LubMotoService,
    LubAuxService,
    LubVehPesadoService,
    JwtService,
    FiltrosService,
    PrismaService,
  ],
  imports: [],
})
export class AppModule {}
