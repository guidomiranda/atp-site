import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FiltrosService {
  constructor(private prisma: PrismaService) {}

  async createFiltro(dto: Prisma.FiltrosCreateInput) {
    return this.prisma.filtros.create({
      data: { ...dto, updated_at: new Date() },
    });
  }

  async updateFiltro(id: string, dto: Prisma.FiltrosUpdateInput) {
    return this.prisma.filtros.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  async deleteFiltro(id: string) {
    return this.prisma.filtros.delete({ where: { id } });
  }

  async getFiltros() {
    return this.prisma.filtros.findMany();
  }

  async getFiltroByLinea(linea: string) {
    return this.prisma.filtros.findMany({ where: { linea } });
  }

  async getFiltroByTipo(tipo: string) {
    return this.prisma.filtros.findMany({ where: { tipo } });
  }

  async getFiltro(id: string) {
    return this.prisma.filtros.findFirst({ where: { id } });
  }
}
