import { Module } from '@nestjs/common';

import { BateriasService } from './baterias.service';
import { BateriasController } from './baterias.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [BateriasService],
  controllers: [BateriasController],
})
export class BateriasModule {}
