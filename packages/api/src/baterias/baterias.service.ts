import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BateriasService {
  constructor(private prisma: PrismaService) {}

  async createBateria(dto: any) {
    return await this.prisma.baterias.create({
      data: { ...dto, updated_at: new Date() },
    });
  }

  async updateBateria(id: string, dto: any) {
    return await this.prisma.baterias.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  async deleteBateria(id: string) {
    return await this.prisma.baterias.delete({ where: { id } });
  }

  async getBaterias() {
    return await this.prisma.baterias.findMany();
  }

  async getBateria(id: string) {
    return await this.prisma.baterias.findFirst({ where: { id } });
  }
}
