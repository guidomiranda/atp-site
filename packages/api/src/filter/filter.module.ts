import { Module } from '@nestjs/common';

import { FilterService } from './filter.service';
import { FilterController } from './filter.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [FilterService],
  controllers: [FilterController],
})
export class FilterModule {}
