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

import { ProductoService } from './producto.service';

@Controller('productos')
export class ProductoController {
  constructor(private service: ProductoService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: any) {
    const producto = await this.service.create(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Creado',
      success: true,
      data: producto,
    });
  }

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Body() dto: any,
    @Param('id') id: string,
  ) {
    const producto = await this.service.update(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Actualizado',
      success: true,
      data: producto,
    });
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const producto = await this.service.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'Eliminado',
      success: true,
      data: producto,
    });
  }

  @Get()
  async getAll(@Res() res: Response) {
    const productos = await this.service.getAll();
    return res.status(HttpStatus.OK).json({
      message: 'Producto',
      success: true,
      data: productos,
    });
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    const producto = await this.service.getOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'Producto',
      success: true,
      data: producto,
    });
  }

  @Get('codigo/:codigo')
  async getOneCodigo(@Res() res: Response, @Param('codigo') codigo: string) {
    const producto = await this.service.getOneCodigo(Number(codigo));
    return res.status(HttpStatus.OK).json({
      message: 'Producto',
      success: true,
      data: producto,
    });
  }
}
