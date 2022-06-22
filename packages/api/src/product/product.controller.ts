import { Response } from 'express';
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

import { CreateProductDTO, EditProductDTO } from './dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private serviceProduct: ProductService) {}

  @Post('/create')
  async createProduct(@Res() res: Response, @Body() dto: CreateProductDTO) {
    const product = await this.serviceProduct.createProduct(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Producto creado',
      success: true,
      product,
    });
  }

  @Patch('/:id')
  async updateProduct(
    @Res() res: Response,
    @Body() dto: EditProductDTO,
    @Param('id') id: string,
  ) {
    const product = await this.serviceProduct.updateProduct(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Producto actualizado',
      success: true,
      product,
    });
  }

  @Delete('/:id')
  async deleteProduct(@Res() res: Response, @Param('id') id: string) {
    const product = await this.serviceProduct.deleteProduct(id);
    return res.status(HttpStatus.OK).json({
      message: 'Producto eliminado',
      success: true,
      product,
    });
  }

  @Get()
  async getProducts(@Res() res: Response) {
    const products = await this.serviceProduct.getProducts();
    return res.status(HttpStatus.OK).json({
      message: 'Productos',
      success: true,
      products,
    });
  }

  @Get('/:id')
  async getProduct(@Res() res: Response, @Param('id') id: string) {
    const product = await this.serviceProduct.getProduct(id);
    return res.status(HttpStatus.OK).json({
      message: 'Producto',
      success: true,
      product,
    });
  }
}
