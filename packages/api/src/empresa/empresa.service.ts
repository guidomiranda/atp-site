import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}

  create(dto: any) {
    return this.prisma.empresa.create({ data: { ...dto } });
  }

  update(id: string, dto: any) {
    return this.prisma.empresa.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  delete(id: string) {
    return this.prisma.empresa.delete({ where: { id } });
  }

  getAll(estado: string = null) {
    if (estado !== null) {
      const vEstado = estado === 'true';
      return this.prisma.empresa.findMany({
        where: { estado: vEstado },
      });
    }

    return this.prisma.empresa.findMany();
  }

  getOne(id: string) {
    return this.prisma.empresa.findFirst({ where: { id } });
  }
}
