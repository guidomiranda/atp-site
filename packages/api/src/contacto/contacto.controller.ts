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
  UseInterceptors, 
  UploadedFile
} from '@nestjs/common';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

import { ContactoService } from './contacto.service';
import { MailContactoDTO } from '../mail/dto/mail-contacto.dto';
import { MailTrabajoDTO } from '../mail/dto/mail-trabajo.dto';

@Controller('contacto')
export class ContactoController {
  constructor(private service: ContactoService) {}

  @Post()
  async sendMailContact(@Res() res: Response, @Body() dto: MailContactoDTO) {
    try {
      await this.service.sendMailContact(dto);
  
      return res.status(HttpStatus.OK).json({
        message: 'Datos enviados',
        success: true,
      });
    } catch (error) {
      return res.status(HttpStatus.OK).json({
        message: error.message,
        success: false,
      });
    }
  }

  @Post('/postulacion')
  @UseInterceptors(FileInterceptor('resume'))
  async sendMailWork(@Res() res: Response, @Body() dto: MailTrabajoDTO, @UploadedFile() file) {
    try {
      await this.service.sendMailWork(dto, file.buffer);
  
      return res.status(HttpStatus.OK).json({
        message: 'Datos enviados',
        success: true,
      });
    } catch (error) {
      return res.status(HttpStatus.OK).json({
        message: error.message,
        success: false,
      });
    }
  }
}
