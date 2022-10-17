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

import { SequenceService } from './sequence.service';

@Controller('sequences')
export class SequenceController {
  constructor(private service: SequenceService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: any) {
    const sequence = await this.service.create(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Creado',
      success: true,
      data: sequence,
    });
  }

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() dto: any,
  ) {
    const sequence = await this.service.update(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Actualizado',
      success: true,
      data: sequence,
    });
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const sequence = await this.service.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'Eliminado',
      success: true,
      data: sequence,
    });
  }

  @Get()
  async getAll(@Res() res: Response) {
    const voucherSeqs = await this.service.getAll();
    return res.status(HttpStatus.OK).json({
      message: 'Sequences',
      success: true,
      data: voucherSeqs,
    });
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    const sequence = await this.service.getOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'Sequence',
      success: true,
      data: sequence,
    });
  }
}
