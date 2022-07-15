import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateLubMoto, UpdateLubMoto } from './dto';

@Injectable()
export class LubMotoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateLubMoto) {
    return this.prisma.lubMoto.create({
      data: {
        ...dto,
        status: true,
        order: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    });
  }

  async update(id: string, dto: UpdateLubMoto) {
    return this.prisma.lubMoto.update({
      where: { id },
      data: { ...dto, updated_at: new Date().toISOString() },
    });
  }

  async delete(id: string) {
    return this.prisma.lubMoto.delete({ where: { id } });
  }

  async getAll() {
    return this.prisma.lubMoto.findMany();
  }

  async get(id: string) {
    return this.prisma.lubMoto.findFirst({ where: { id } });
  }
}
