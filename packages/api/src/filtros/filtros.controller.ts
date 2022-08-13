import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
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

  @Get('/')
  async getFiltros(@Res() res: Response) {
    const filtros = await this.service.getFiltros();

    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: filtros,
    });
  }
}
