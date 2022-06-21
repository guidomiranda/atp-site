import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ReviewInterface } from './interfaces';
import { CreateReviewDTO, EditReviewDTO } from './dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel('Review') private readonly reviewModel: Model<ReviewInterface>,
  ) {}

  async createReview(dto: CreateReviewDTO) {
    const review = new this.reviewModel(dto);
    if (!review) throw new NotFoundException('Testimonio no encontrado');
    return await review.save();
  }

  async editReview(id: string, dto: EditReviewDTO) {
    const review = await this.reviewModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    if (!review) throw new NotFoundException('Testimonio no encontrado');
    return review;
  }

  async deleteReview(id: string) {
    const review = await this.reviewModel.findByIdAndDelete(id);
    if (!review) throw new NotFoundException('Testimonio no encontrado');
    return review;
  }

  async getReviews() {
    const reviews = await this.reviewModel.find({});
    if (!reviews) throw new NotFoundException('Testimonios no encontrado');
    return reviews;
  }

  async getReview(id: string) {
    const review = await this.reviewModel.findById(id);
    if (!review) throw new NotFoundException('Testimonios no encontrado');
    return review;
  }
}
