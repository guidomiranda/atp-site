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

import { CreateLubVehLiviano, UpdateLubVehLiviano } from './dto';
import { LubVehLivianoService } from './lub-veh-liviano.service';

@Controller('lub-veh-liviano')
export class LubVehLivianoController {
  constructor(private service: LubVehLivianoService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: CreateLubVehLiviano) {
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
    @Body() dto: UpdateLubVehLiviano,
    @Param('id') id: string,
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
      message: 'Lista de productos',
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
