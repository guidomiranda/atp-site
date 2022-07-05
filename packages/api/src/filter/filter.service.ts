import { Injectable } from '@nestjs/common';

import { CreateFiltertDTO, EditFiltertDTO } from './dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FilterService {
  constructor(private prisma: PrismaService) {}

  async createFilter(dto: CreateFiltertDTO) {
    return this.prisma.filter.create({
      data: {
        ...dto,
        status: true,
        order: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    });
  }

  async updateFilter(id: string, dto: EditFiltertDTO) {
    return this.prisma.filter.update({
      where: { id },
      data: { ...dto, updated_at: new Date().toISOString() },
    });
  }

  async deleteFilter(id: string) {
    return this.prisma.filter.delete({ where: { id } });
  }

  async getFilters() {
    return this.prisma.filter.findMany();
  }

  async getFilterByLine(line: string) {
    return this.prisma.filter.findMany({ where: { line } });
  }

  async getFiltersByType(type: string) {
    return this.prisma.filter.findMany({ where: { type } });
  }

  async getFilter(id: string) {
    return this.prisma.filter.findFirst({ where: { id } });
  }
}
