import { Module } from '@nestjs/common';

import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [ProductoService],
  controllers: [ProductoController],
})
export class ProductoModule {}
