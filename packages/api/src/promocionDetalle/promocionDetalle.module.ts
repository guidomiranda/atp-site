import { Module } from '@nestjs/common';

import { PromocionDetalleService } from './promocionDetalle.service';
import { PromocionDetalleController } from './promocionDetalle.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [PromocionDetalleService],
  controllers: [PromocionDetalleController],
})
export class PromocionDetalleModule {}
