import { Module } from '@nestjs/common';

import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [EmpresaService],
  controllers: [EmpresaController],
})
export class EmpresaModule {}
