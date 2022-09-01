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

import { ContactoService } from './contacto.service';
import { MailContactoDTO } from '../mail/dto/mail-contacto.dto';

@Controller('contacto')
export class ContactoController {
  constructor(private service: ContactoService) {}

  @Post()
  async sendMailContact(@Res() res: Response, @Body() dto: MailContactoDTO) {
    await this.service.sendMailContact(dto);

    return res.status(HttpStatus.OK).json({
      message: 'Datos enviados',
      success: true,
    });
  }
}
