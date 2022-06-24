import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('/:type')
  async getProducts(@Res() res: Response, @Param('type') type: string) {
    const products = await this.categoryService.getProducts(type);
    return res.status(HttpStatus.OK).json({
      message: 'Productos',
      success: true,
      products,
    });
  }
}
