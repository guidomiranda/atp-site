import { Module } from '@nestjs/common';

import { LubVehPesadoService } from './lub-veh-pesado.service';
import { LubVehPesadoController } from './lub-veh-pesado.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [LubVehPesadoService],
  controllers: [LubVehPesadoController],
})
export class LubVehPesadoModule {}
