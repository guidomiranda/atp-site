import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LubricantesService {
  constructor(private prisma: PrismaService) {}

  async createLubricantes(dto: any) {
    return await this.prisma.lubricantes.create({
      data: { ...dto, updated_at: new Date() },
    });
  }

  async updateLubricantes(id: string, dto: any) {
    return await this.prisma.lubricantes.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  async deleteLubricantes(id: string) {
    return await this.prisma.lubricantes.delete({ where: { id } });
  }

  async getLubricantes() {
    return await this.prisma.lubricantes.findMany();
  }

  async getLubricantesByLinea(linea: string) {
    return await this.prisma.lubricantes.findMany({ where: { linea } });
  }

  async getLubricante(id: string) {
    return await this.prisma.lubricantes.findFirst({ where: { id } });
  }
}
