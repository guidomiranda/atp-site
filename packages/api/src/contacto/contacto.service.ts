import { Injectable } from '@nestjs/common';

import { MailService } from 'src/mail/mail.service';
import { ContactoInterface } from '../mail/interfaces/contacto.interface';
import { TrabajoInterface } from '../mail/interfaces/trabajo.interface';

@Injectable()
export class ContactoService {
  constructor(private mailService: MailService) {}

  async sendMailContact(data: ContactoInterface) {
    return await this.mailService.sendMailContacto(data);
  }

  async sendMailWork(data: TrabajoInterface, file: any) {
    return await this.mailService.sendMailTrabajo(data, file);
  }
}
