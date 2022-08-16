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
import { LubricantesService } from './lubricantes.service';

@Controller('lubricantes')
export class LubricantesController {
  constructor(private service: LubricantesService) {}

  @Post('/create')
  async createLubricantes(@Res() res: Response, @Body() dto: any) {
    const lubricante = await this.service.createLubricantes(dto);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: lubricante,
    });
  }

  @Patch('/:id')
  async updateLubricantes(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() dto: any,
  ) {
    const lubricante = await this.service.updateLubricantes(id, dto);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: lubricante,
    });
  }

  @Delete('/:id')
  async deleteLubricantes(@Res() res: Response, @Param('id') id: string) {
    const lubricante = await this.service.deleteLubricantes(id);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: lubricante,
    });
  }

  @Get()
  async getLubricantes(@Res() res: Response) {
    const lubricantes = await this.service.getLubricantes();
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: lubricantes,
    });
  }

  @Get('/linea/:linea')
  async getLubricanteByLinea(
    @Res() res: Response,
    @Param('linea') linea: string,
  ) {
    const lubricantes = await this.service.getLubricantesByLinea(linea);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: lubricantes,
    });
  }

  @Get('/:id')
  async getLubricante(@Res() res: Response, @Param('id') id: string) {
    const lubricante = await this.service.getLubricante(id);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: lubricante,
    });
  }
}
