import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PromocionService {
  constructor(private prisma: PrismaService) {}

  create(dto: any) {
    return this.prisma.promocion.create({ data: { ...dto } });
  }

  update(id: string, dto: any) {
    return this.prisma.promocion.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  delete(id: string) {
    return this.prisma.promocion.delete({ where: { id } });
  }

  getAll() {
    return this.prisma.promocion.findMany();
  }

  getOne(id: string) {
    return this.prisma.promocion.findFirst({ where: { id } });
  }
}
