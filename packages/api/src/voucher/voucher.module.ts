import { Module } from '@nestjs/common';

import { VoucherService } from './voucher.service';
import { VoucherController } from './voucher.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [VoucherService],
  controllers: [VoucherController],
})
export class VoucherModule {}
