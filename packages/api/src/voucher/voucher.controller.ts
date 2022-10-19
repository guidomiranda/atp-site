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

import { VoucherService } from './voucher.service';

@Controller('vouchers')
export class VoucherController {
  constructor(private service: VoucherService) {}

  @Post('/create')
  async create(@Res() res: Response, @Body() dto: any) {
    const voucher = await this.service.create(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Creado',
      success: true,
      data: voucher,
    });
  }

  @Patch('/:id')
  async update(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() dto: any,
  ) {
    const voucher = await this.service.update(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Actualizado',
      success: true,
      data: voucher,
    });
  }

  @Delete('/:id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const voucher = await this.service.delete(id);
    return res.status(HttpStatus.OK).json({
      message: 'Eliminado',
      success: true,
      data: voucher,
    });
  }

  @Get()
  async getAll(@Res() res: Response) {
    const vouchers = await this.service.getAll();
    return res.status(HttpStatus.OK).json({
      message: 'Vouchers',
      success: true,
      data: vouchers,
    });
  }

  @Get('/:id')
  async getOne(@Res() res: Response, @Param('id') id: string) {
    const voucher = await this.service.getOne(id);
    return res.status(HttpStatus.OK).json({
      message: 'Voucher',
      success: true,
      data: voucher,
    });
  }

  @Get('codigo/:codigo')
  async getOneCodigo(@Res() res: Response, @Param('codigo') codigo: string) {
    const voucher = await this.service.getOneCodigo(codigo);
    return res.status(HttpStatus.OK).json({
      message: 'Voucher',
      success: true,
      data: voucher,
    });
  }
}
