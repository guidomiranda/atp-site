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

import { SuccessService } from './success.service';
import { CreateSuccessDTO, EditSuccessDTO } from './dto';

@Controller('success')
export class SuccessController {
  constructor(private successService: SuccessService) {}

  @Post('/create')
  async createSuccess(@Res() res: Response, @Body() dto: CreateSuccessDTO) {
    const info = await this.successService.createSuccess(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Post creado',
      success: true,
      info,
    });
  }

  @Patch('/:id')
  async editSuccess(
    @Res() res: Response,
    @Body() dto: EditSuccessDTO,
    @Param('id') id: string,
  ) {
    const info = await this.successService.editSuccess(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Post actualizado',
      success: true,
      info,
    });
  }

  @Delete('/:id')
  async deleteSuccess(@Res() res: Response, @Param('id') id: string) {
    const info = await this.successService.deleteSuccess(id);
    return res.status(HttpStatus.OK).json({
      message: 'Post eliminado',
      success: true,
      info,
    });
  }

  @Get()
  async getSuccesses(@Res() res: Response) {
    const infos = await this.successService.getSuccesses();
    return res.status(HttpStatus.OK).json({
      message: 'Posts',
      success: true,
      infos,
    });
  }

  @Get('/:id')
  async getSuccess(@Res() res: Response, @Param('id') id: string) {
    const info = await this.successService.getSuccess(id);
    return res.status(HttpStatus.OK).json({
      message: 'Info',
      success: true,
      info,
    });
  }
}
