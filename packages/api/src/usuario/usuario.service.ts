import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  create(dto: any) {
    return this.prisma.usuario.create({ data: { ...dto } });
  }

  update(id: string, dto: any) {
    return this.prisma.usuario.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  delete(id: string) {
    return this.prisma.usuario.delete({ where: { id } });
  }

  getAll() {
    return this.prisma.usuario.findMany();
  }

  getOne(id: string) {
    return this.prisma.usuario.findFirst({ where: { id } });
  }

  getOneCodigo(codigo: string) {
    return this.prisma.usuario.findFirst({ where: { codigo } });
  }
}
