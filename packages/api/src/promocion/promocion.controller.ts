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
  Query,
} from '@nestjs/common';
import { Response } from 'express';

import { PromocionService } from './promocion.service';

@Controller('promociones')
export class PromocionController {
  constructor(private service: PromocionService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: any) {
    const cliente = await this.service.create(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Creado',
      success: true,
      data: cliente,
    });
  }

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() dto: any,
  ) {
    const cliente = await this.service.update(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Actualizado',
      success: true,
      data: cliente,
    });
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const cliente = await this.service.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'Eliminado',
      success: true,
      data: cliente,
    });
  }

  @Get()
  async getAll(
    @Query('estado') estado: string,
    @Query('empresaId') empresaId: string,
    @Res() res: Response,
  ) {
    const clientes = await this.service.getAll(estado, empresaId);
    return res.status(HttpStatus.OK).json({
      message: 'Promociones',
      success: true,
      data: clientes,
    });
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    const cliente = await this.service.getOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'Promocion',
      success: true,
      data: cliente,
    });
  }
}
