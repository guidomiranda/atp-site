import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ContactoInterface } from './interfaces/contacto.interface';
import { TrabajoInterface } from './interfaces/trabajo.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private config: ConfigService,
  ) {}

  async sendMailContacto(contacto: ContactoInterface) {
    await this.mailerService.sendMail({
      to: this.config.get('MAIL_TO_CONTACT'),
      subject: 'Nuevo contacto',
      template: './contacto',
      context: {
        data: contacto,
      },
    });
  }

  async sendMailTrabajo(trabajo: TrabajoInterface, file: any) {
    await this.mailerService.sendMail({
      to: this.config.get('MAIL_TO'),
      subject: 'Nueva postulación',
      template: './trabajo',
      context: {
        data: trabajo
      },
      attachments: [{
        content: file,
        filename: 'resume.pdf',
        contentDisposition: "attachment"
      }]
    });
  }
}
