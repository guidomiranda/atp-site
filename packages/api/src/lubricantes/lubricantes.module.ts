import { Module } from '@nestjs/common';

import { LubricantesService } from './lubricantes.service';
import { LubricantesController } from './lubricantes.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [LubricantesService],
  controllers: [LubricantesController],
})
export class LubricantesModule {}
