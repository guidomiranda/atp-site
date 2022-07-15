import { Module } from '@nestjs/common';

import { LubAuxService } from './lub-aux.service';
import { LubAuxController } from './lub-aux.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [LubAuxService],
  controllers: [LubAuxController],
})
export class LubAuxModule {}
