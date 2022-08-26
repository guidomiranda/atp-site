import { Module } from '@nestjs/common';

import { VacanciasService } from './vacancias.service';
import { VacanciasController } from './vacancias.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [VacanciasService],
  controllers: [VacanciasController],
})
export class VacanciasModule {}
