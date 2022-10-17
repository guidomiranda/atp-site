import { Module } from '@nestjs/common';

import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
