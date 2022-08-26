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

import { VacanciasService } from './vacancias.service';

@Controller('vacancias')
export class VacanciasController {
  constructor(private service: VacanciasService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: any) {
    const vacancia = await this.service.create(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Creado correctamente',
      success: true,
      data: vacancia,
    });
  }

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Body() dto: any,
    @Param('id') id: string,
  ) {
    const vacancia = await this.service.update(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Actualizado correctamente',
      success: true,
      data: vacancia,
    });
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const vacancia = await this.service.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'Eliminado',
      success: true,
      data: vacancia,
    });
  }

  @Get()
  async getAll(@Res() res: Response) {
    const vacancias = await this.service.getAll();
    return res.status(HttpStatus.OK).json({
      message: 'Todas las vacancias',
      success: true,
      data: vacancias,
    });
  }

  @Get('/area/:area')
  async getByArea(@Res() res: Response, @Param('area') area: string) {
    const vacancias = await this.service.getByArea(area);
    return res.status(HttpStatus.OK).json({
      message: 'Todas las vacancias por area',
      success: true,
      data: vacancias,
    });
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    const vacancia = await this.service.getOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'Vacancia',
      success: true,
      data: vacancia,
    });
  }
}
