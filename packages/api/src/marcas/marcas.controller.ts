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

import { MarcasService } from './marcas.service';

@Controller('marcas')
export class MarcasController {
  constructor(private service: MarcasService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: any) {
    const marca = await this.service.create(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Creado',
      success: true,
      data: marca,
    });
  }

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Body() dto: any,
    @Param('id') id: string,
  ) {
    const marca = await this.service.update(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Actualizado',
      success: true,
      data: marca,
    });
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const marca = await this.service.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'Eliminado',
      success: true,
      data: marca,
    });
  }

  @Get()
  async getAll(@Res() res: Response) {
    const marcas = await this.service.getAll();
    return res.status(HttpStatus.OK).json({
      message: 'Marcas',
      success: true,
      data: marcas,
    });
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    const marca = await this.service.getOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'Marca',
      success: true,
      data: marca,
    });
  }
}
