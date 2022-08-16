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

import { BateriasService } from './baterias.service';

@Controller('baterias')
export class BateriasController {
  constructor(private service: BateriasService) {}

  @Post('/create')
  async createBateria(@Res() res: Response, @Body() dto: any) {
    const bateria = await this.service.createBateria(dto);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: bateria,
    });
  }

  @Patch('/:id')
  async updateBateria(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() dto: any,
  ) {
    const bateria = await this.service.updateBateria(id, dto);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: bateria,
    });
  }

  @Delete('/:id')
  async deleteBateria(@Res() res: Response, @Param('id') id: string) {
    const bateria = await this.service.deleteBateria(id);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: bateria,
    });
  }

  @Get()
  async getBaterias(@Res() res: Response) {
    const baterias = await this.service.getBaterias();
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: baterias,
    });
  }

  @Get('/:id')
  async getBateria(@Res() res: Response, @Param('id') id: string) {
    const bateria = await this.service.getBateria(id);
    return res.status(HttpStatus.OK).json({
      message: '',
      success: true,
      data: bateria,
    });
  }
}
