import { Module } from '@nestjs/common';

import { MarcasService } from './marcas.service';
import { MarcasController } from './marcas.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [MarcasService],
  controllers: [MarcasController],
})
export class MarcasModule {}
