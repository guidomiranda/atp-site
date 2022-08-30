import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ClientesService {
  constructor(private prisma: PrismaService) {}

  create(dto: any) {
    return this.prisma.clientes.create({ data: { ...dto } });
  }

  update(id: string, dto: any) {
    return this.prisma.clientes.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  delete(id: string) {
    return this.prisma.clientes.delete({ where: { id } });
  }

  getAll() {
    return this.prisma.clientes.findMany();
  }

  getOne(id: string) {
    return this.prisma.clientes.findFirst({ where: { id } });
  }
}
