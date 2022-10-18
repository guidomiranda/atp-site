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
import { FormDataRequest } from 'nestjs-form-data';

import { UsuarioService } from './usuario.service';

@Controller('usuarios')
export class UsuarioController {
  constructor(private service: UsuarioService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: any) {
    const cliente = await this.service.create(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Creado',
      success: true,
      data: cliente,
    });
  }

  @Post('/createAll')
  async createAll(@Res() res: Response, @Body() dto: any) {
    const cliente = await this.service.createAll(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Creado',
      success: true,
      data: cliente,
    });
  }

  @Post('/import')
  @FormDataRequest()
  async createCSV(@Res() res: Response, @Body() dto: any) {
    const cliente = await this.service.createCSV(dto);
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
      message: 'Usuarios',
      success: true,
      data: clientes,
    });
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    const cliente = await this.service.getOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'Usuario',
      success: true,
      data: cliente,
    });
  }

  @Get('/codigo/:codigo')
  async getOneCodigo(@Res() res: Response, @Param('codigo') codigo: string) {
    const cliente = await this.service.getOneCodigo(codigo);
    return res.status(HttpStatus.OK).json({
      message: 'Usuario',
      success: true,
      data: cliente,
    });
  }
}
