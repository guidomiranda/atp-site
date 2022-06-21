import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Review', schema: ReviewSchema }]),
  ],
  providers: [ReviewService],
  controllers: [ReviewController],
})
export class ReviewModule {}
