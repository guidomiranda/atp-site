import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

import { CreateReviewDTO, EditReviewDTO } from './dto';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Post('/create')
  async createReview(@Res() res: Response, @Body() dto: CreateReviewDTO) {
    const review = await this.reviewService.createReview(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Testimonio creado',
      success: true,
      review,
    });
  }

  @Patch('/:id')
  async editReview(
    @Res() res: Response,
    @Body() dto: EditReviewDTO,
    @Param('id') id: string,
  ) {
    const review = await this.reviewService.editReview(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Testimonio actualizado',
      success: true,
      review,
    });
  }

  @Delete('/:id')
  async deleteReview(@Res() res: Response, @Param('id') id: string) {
    const review = await this.reviewService.deleteReview(id);
    return res.status(HttpStatus.OK).json({
      message: 'Testimonio elimnado',
      success: true,
      review,
    });
  }

  @Get()
  async getReviews(@Res() res: Response) {
    const reviews = await this.reviewService.getReviews();
    return res.status(HttpStatus.OK).json({
      message: 'Testimonios',
      success: true,
      reviews,
    });
  }

  @Get('/:id')
  async getReview(@Res() res: Response, @Param('id') id: string) {
    const review = await this.reviewService.getReview(id);
    return res.status(HttpStatus.OK).json({
      message: 'Testimonio',
      success: true,
      review,
    });
  }
}
