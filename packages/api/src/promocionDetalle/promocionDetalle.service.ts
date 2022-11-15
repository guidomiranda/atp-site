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
    return this.prisma.promocionDetalle.findMany({
      select: {
        id: true,
        promocionId: false,
        promocion: {
          select: {
            id: true,
            nombre: true,
          },
        },
        productoId: false,
        producto: {
          select: {
            id: true,
            nombre: true,
          },
        },
        porcentaje: true,
        monto: true,
        created_at: false,
        updated_at: false,
      },
    });
  }

  getOne(id: string) {
    return this.prisma.promocionDetalle.findFirst({
      where: { id },
      select: {
        id: true,
        promocionId: false,
        promocion: {
          select: {
            id: true,
            nombre: true,
          },
        },
        productoId: false,
        producto: {
          select: {
            id: true,
            nombre: true,
          },
        },
        porcentaje: true,
        monto: true,
        created_at: false,
        updated_at: false,
      },
    });
  }

  getAllPromocion(promocionId: string) {
    return this.prisma.promocionDetalle.findMany({
      where: { promocionId },
      select: {
        id: true,
        promocionId: false,
        promocion: {
          select: {
            id: true,
            nombre: true,
          },
        },
        productoId: false,
        producto: {
          select: {
            id: true,
            nombre: true,
          },
        },
        porcentaje: true,
        monto: true,
        created_at: false,
        updated_at: false,
      },
    });
  }
}
