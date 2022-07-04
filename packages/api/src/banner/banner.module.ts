import { Module } from '@nestjs/common';

import { BannerService } from './banner.service';
import { BannerController } from './banner.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [BannerService],
  controllers: [BannerController],
})
export class BannerModule {}
