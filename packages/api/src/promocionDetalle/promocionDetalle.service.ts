import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PromocionDetalleService {
  constructor(private prisma: PrismaService) {}

  create(dto: any) {
    return this.prisma.promocionDetalle.create({ data: { ...dto } });
  }

  update(id: string, dto: any) {
    return this.prisma.promocionDetalle.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  delete(id: string) {
    return this.prisma.promocionDetalle.delete({ where: { id } });
  }

  getAll() {
    return this.prisma.promocionDetalle.findMany();
  }

  getOne(id: string) {
    return this.prisma.promocionDetalle.findFirst({ where: { id } });
  }
}
