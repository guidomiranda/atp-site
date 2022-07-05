import { Injectable } from '@nestjs/common';

import { CreateReviewDTO, EditReviewDTO } from './dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async createReview(dto: CreateReviewDTO) {
    return this.prisma.review.create({
      data: {
        ...dto,
        status: true,
        order: 1,
        created_at: new Date().toISOString(),
      },
    });
  }

  async editReview(id: string, dto: EditReviewDTO) {
    return this.prisma.review.update({ where: { id }, data: { ...dto } });
  }

  async deleteReview(id: string) {
    return this.prisma.review.delete({ where: { id } });
  }

  async getReviews() {
    return this.prisma.review.findMany();
  }

  async getReview(id: string) {
    return this.prisma.review.findFirst({ where: { id } });
  }
}
