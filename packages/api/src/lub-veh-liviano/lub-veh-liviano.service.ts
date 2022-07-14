import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { CreateLubVehLiviano, UpdateLubVehLiviano } from './dto';

@Injectable()
export class LubVehLivianoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateLubVehLiviano) {
    return this.prisma.lubVehLiviano.create({
      data: {
        ...dto,
        status: true,
        order: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    });
  }

  async update(id: string, dto: UpdateLubVehLiviano) {
    return this.prisma.lubVehLiviano.update({
      where: { id },
      data: { ...dto, updated_at: new Date().toISOString() },
    });
  }

  async delete(id: string) {
    return this.prisma.lubVehLiviano.delete({ where: { id } });
  }

  async getAll() {
    return this.prisma.lubVehLiviano.findMany();
  }

  async get(id: string) {
    return this.prisma.lubVehLiviano.findFirst({ where: { id } });
  }
}
