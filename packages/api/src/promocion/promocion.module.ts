import { Module } from '@nestjs/common';

import { PromocionService } from './promocion.service';
import { PromocionController } from './promocion.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [PromocionService],
  controllers: [PromocionController],
})
export class PromocionModule {}
