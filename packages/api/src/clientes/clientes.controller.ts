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

import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
  constructor(private service: ClientesService) {}

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
  async getAll(@Res() res: Response) {
    const clientes = await this.service.getAll();
    return res.status(HttpStatus.OK).json({
      message: 'Clientes',
      success: true,
      data: clientes,
    });
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    const cliente = await this.service.getOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'Cliente',
      success: true,
      data: cliente,
    });
  }
}
