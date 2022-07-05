import { Module } from '@nestjs/common';

import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [ReviewService],
  controllers: [ReviewController],
})
export class ReviewModule {}
