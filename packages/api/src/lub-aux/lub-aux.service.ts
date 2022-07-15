import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateLubAux, UpdateLubAux } from './dto';

@Injectable()
export class LubAuxService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateLubAux) {
    return this.prisma.lubAux.create({
      data: {
        ...dto,
        status: true,
        order: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    });
  }

  async update(id: string, dto: UpdateLubAux) {
    return this.prisma.lubAux.update({
      where: { id },
      data: { ...dto, updated_at: new Date().toISOString() },
    });
  }

  async delete(id: string) {
    return this.prisma.lubAux.delete({ where: { id } });
  }

  async getAll() {
    return this.prisma.lubAux.findMany();
  }

  async get(id: string) {
    return this.prisma.lubAux.findFirst({ where: { id } });
  }
}
