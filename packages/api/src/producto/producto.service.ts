import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductoService {
  constructor(private prisma: PrismaService) {}

  create(dto: any) {
    return this.prisma.producto.create({ data: { ...dto } });
  }

  update(id: string, dto: any) {
    return this.prisma.producto.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  delete(id: string) {
    return this.prisma.producto.delete({ where: { id } });
  }

  getAll() {
    return this.prisma.producto.findMany();
  }

  getOne(id: string) {
    return this.prisma.producto.findFirst({ where: { id } });
  }

  getOneCodigo(codigo: number) {
    return this.prisma.producto.findFirst({ where: { codigo } });
  }
}
