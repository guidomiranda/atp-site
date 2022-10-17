import { Module } from '@nestjs/common';

import { SequenceService } from './sequence.service';
import { SequenceController } from './sequence.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [SequenceService],
  controllers: [SequenceController],
})
export class VoucherModule {}
