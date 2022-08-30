import { Module } from '@nestjs/common';

import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [ClientesService],
  controllers: [ClientesController],
})
export class ClientesModule {}
