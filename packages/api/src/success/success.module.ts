import { Module } from '@nestjs/common';

import { SuccessService } from './success.service';
import { SuccessController } from './success.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [SuccessService],
  controllers: [SuccessController],
})
export class SuccessModule {}
