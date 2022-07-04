import { Injectable } from '@nestjs/common';

import { CreateClientDTO, EditClientDTO } from './dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async createClient(dto: CreateClientDTO) {
    return this.prisma.client.create({
      data: {
        ...dto,
        status: true,
        order: 1,
        created_at: new Date().toISOString(),
      },
    });
  }

  async updateClient(id: string, dto: EditClientDTO) {
    return this.prisma.client.update({
      where: { id },
      data: { ...dto },
    });
  }

  async deleteClient(id: string) {
    return this.prisma.client.delete({ where: { id } });
  }

  async getClients() {
    return this.prisma.client.findMany();
  }

  async getClient(id: string) {
    return this.prisma.client.findFirst({ where: { id } });
  }
}
