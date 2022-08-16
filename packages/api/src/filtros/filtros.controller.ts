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
import { Prisma } from '@prisma/client';
import { Response } from 'express';

import { FiltrosService } from './filtros.service';

@Controller('filtros')
export class FiltrosController {
  constructor(private service: FiltrosService) {}

  @Post('/create')
  async createFiltro(
    @Res() res: Response,
    @Body() dto: Prisma.FiltrosCreateInput,
  ) {
    const filtro = await this.service.createFiltro(dto);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: filtro,
    });
  }

  @Patch('/:id')
  async updateFiltro(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() dto: any,
  ) {
    const filtro = await this.service.updateFiltro(id, dto);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: filtro,
    });
  }

  @Delete('/:id')
  async deleteFiltro(@Res() res: Response, @Param('id') id: string) {
    const filtro = await this.service.deleteFiltro(id);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: filtro,
    });
  }

  @Get('/')
  async getFiltros(@Res() res: Response) {
    const filtros = await this.service.getFiltros();

    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: filtros,
    });
  }

  @Get('/linea/:linea')
  async getFiltrosByLinea(@Res() res: Response, @Param('linea') linea: string) {
    const filtros = await this.service.getFiltroByLinea(linea);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: filtros,
    });
  }

  @Get('/tipo/:tipo')
  async getFiltrosByTipo(@Res() res: Response, @Param('tipo') tipo: string) {
    const filtros = await this.service.getFiltroByTipo(tipo);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: filtros,
    });
  }

  @Get('/:id')
  async getFiltro(@Res() res: Response, @Param('id') id: string) {
    const filtro = await this.service.getFiltro(id);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: filtro,
    });
  }
}
