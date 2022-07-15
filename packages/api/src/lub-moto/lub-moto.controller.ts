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

import { CreateLubMoto, UpdateLubMoto } from './dto';
import { LubMotoService } from './lub-moto.service';

@Controller('lub-moto')
export class LubMotoController {
  constructor(private service: LubMotoService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateLubMoto) {
    const product = await this.service.create(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Producto creado',
      success: true,
      product,
    });
  }

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() dto: UpdateLubMoto,
  ) {
    const product = await this.service.update(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Producto actualizado',
      success: true,
      product,
    });
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const product = await this.service.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'Producto eliminado',
      success: true,
      product,
    });
  }

  @Get()
  async getAll(@Res() res: Response) {
    const products = await this.service.getAll();
    return res.status(HttpStatus.OK).json({
      message: 'Lista de producto',
      success: true,
      products,
    });
  }

  @Get('/:id')
  async get(@Res() res: Response, @Param('id') id: string) {
    const product = await this.service.get(id);
    return res.status(HttpStatus.OK).json({
      message: 'Producto',
      success: true,
      product,
    });
  }
}
