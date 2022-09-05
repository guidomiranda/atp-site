import { Module } from '@nestjs/common';

import { ContactoService } from './contacto.service';
import { ContactoController } from './contacto.controller';

@Module({
  imports: [],
  providers: [ContactoService],
  controllers: [ContactoController],
})
export class ContactoModule {}
