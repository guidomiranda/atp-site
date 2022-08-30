import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MarcasService {
  constructor(private prisma: PrismaService) {}

  create(dto: any) {
    return this.prisma.marcas.create({ data: { ...dto } });
  }

  update(id: string, dto: any) {
    return this.prisma.marcas.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  delete(id: string) {
    return this.prisma.marcas.delete({ where: { id } });
  }

  getAll() {
    return this.prisma.marcas.findMany();
  }

  getOne(id: string) {
    return this.prisma.marcas.findFirst({ where: { id } });
  }
}
