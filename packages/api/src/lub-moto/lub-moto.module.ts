import { Module } from '@nestjs/common';

import { LubMotoService } from './lub-moto.service';
import { LubMotoController } from './lub-moto.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [LubMotoService],
  controllers: [LubMotoController],
})
export class LubMotoModule {}
