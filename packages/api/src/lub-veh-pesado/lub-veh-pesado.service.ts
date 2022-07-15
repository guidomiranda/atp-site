import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateLubVehPesado, UpdateLubVehPesado } from './dto';

@Injectable()
export class LubVehPesadoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateLubVehPesado) {
    return this.prisma.lubVehPesado.create({
      data: {
        ...dto,
        status: true,
        order: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    });
  }

  async update(id: string, dto: UpdateLubVehPesado) {
    return this.prisma.lubVehPesado.update({
      where: { id },
      data: { ...dto, updated_at: new Date().toISOString() },
    });
  }

  async delete(id: string) {
    return this.prisma.lubVehPesado.delete({ where: { id } });
  }

  async getAll() {
    return this.prisma.lubVehPesado.findMany();
  }

  async get(id: string) {
    return this.prisma.lubVehPesado.findFirst({ where: { id } });
  }
}
