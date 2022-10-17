import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
import { LubricantesController } from './lubricantes/lubricantes.controller';
import { LubricantesService } from './lubricantes/lubricantes.service';
import { BateriasController } from './baterias/baterias.controller';
import { BateriasService } from './baterias/baterias.service';
import { VacanciasController } from './vacancias/vacancias.controller';
import { VacanciasService } from './vacancias/vacancias.service';
import { ClientesController } from './clientes/clientes.controller';
import { MarcasController } from './marcas/marcas.controller';
import { ClientesService } from './clientes/clientes.service';
import { MarcasService } from './marcas/marcas.service';

import { ContactoController } from './contacto/contacto.controller';
import { ContactoService } from './contacto/contacto.service';

import { MailModule } from './mail/mail.module';

import { EmpresaController } from './empresa/empresa.controller';
import { EmpresaService } from './empresa/empresa.service';

import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioService } from './usuario/usuario.service';

import { PromocionController } from './promocion/promocion.controller';
import { PromocionService } from './promocion/promocion.service';

import { PromocionDetalleController } from './promocionDetalle/promocionDetalle.controller';
import { PromocionDetalleService } from './promocionDetalle/promocionDetalle.service';

import { VoucherController } from './voucher/voucher.controller';
import { VoucherService } from './voucher/voucher.service';

import { SequenceController } from './sequence/sequence.controller';
import { SequenceService } from './sequence/sequence.service';

import { ProductoController } from './producto/producto.controller';
import { ProductoService } from './producto/producto.service';

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
    LubricantesController,
    BateriasController,
    VacanciasController,
    ClientesController,
    MarcasController,
    ContactoController,
    EmpresaController,
    UsuarioController,
    PromocionController,
    PromocionDetalleController,
    VoucherController,
    SequenceController,
    ProductoController,
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
    LubricantesService,
    BateriasService,
    VacanciasService,
    ClientesService,
    MarcasService,
    PrismaService,
    ContactoService,
    EmpresaService,
    UsuarioService,
    PromocionService,
    PromocionDetalleService,
    VoucherService,
    SequenceService,
    ProductoService,
  ],
  imports: [
    MailModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
