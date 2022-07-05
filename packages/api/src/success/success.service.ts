import { Injectable } from '@nestjs/common';

import { CreateSuccessDTO, EditSuccessDTO } from './dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SuccessService {
  constructor(private prisma: PrismaService) {}

  async createSuccess(dto: CreateSuccessDTO) {
    return this.prisma.success.create({
      data: {
        ...dto,
        status: true,
        order: 1,
        created_at: new Date().toISOString(),
      },
    });
  }

  async editSuccess(id: string, dto: EditSuccessDTO) {
    return this.prisma.success.update({ where: { id }, data: { ...dto } });
  }

  async deleteSuccess(id: string) {
    return this.prisma.success.delete({ where: { id } });
  }

  async getSuccesses() {
    return this.prisma.success.findMany();
  }

  async getSuccess(id: string) {
    return this.prisma.success.findFirst({ where: { id } });
  }
}
