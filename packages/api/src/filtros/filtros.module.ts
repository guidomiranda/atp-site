import { Module } from '@nestjs/common';

import { FiltrosService } from './filtros.service';
import { FiltrosController } from './filtros.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [FiltrosService],
  controllers: [FiltrosController],
})
export class FiltrosModule {}
