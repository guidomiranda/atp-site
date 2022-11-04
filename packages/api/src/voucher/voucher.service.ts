import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { createSequence } from '../helpers/createSequence';

@Injectable()
export class VoucherService {
  constructor(private prisma: PrismaService) {}

  async create(dto: any) {
    const codigo = await createSequence('voucher', dto);
    return await this.prisma.voucher.create({
      data: { ...dto, codigo },
    });
  }

  update(id: string, dto: any) {
    return this.prisma.voucher.update({
      where: { id },
      data: { ...dto, updated_at: new Date() },
    });
  }

  updateCodigo(codigo: string, dto: any) {
    return this.prisma.voucher.update({
      where: { codigo: parseInt(codigo) },
      data: { ...dto },
    });
  }

  delete(id: string) {
    return this.prisma.voucher.delete({ where: { id } });
  }

  getAll() {
    return this.prisma.voucher.findMany({
      select: {
        id: true,
        codigo: true,
        fecha: true,
        canjeado: true,
        canjeadoFecha: true,
        promocionId: false,
        promocionVoucher: {
          select: {
            id: true,
            nombre: true,
          },
        },
        usuarioId: false,
        usuario: {
          select: {
            id: true,
            codigo: true,
            nombre: true,
          },
        },
        promocionProducto: {
          select: {
            id: true,
            nombre: true,
            codigoBarra: true,
          },
        },
        cantidad: true,
        created_at: true,
      },
    });
  }

  getOne(id: string) {
    return this.prisma.voucher.findFirst({
      where: { id },
      select: {
        id: true,
        codigo: true,
        fecha: true,
        canjeado: true,
        canjeadoFecha: true,
        promocionId: false,
        promocionVoucher: {
          select: {
            id: true,
            nombre: true,
          },
        },
        usuarioId: false,
        usuario: {
          select: {
            id: true,
            codigo: true,
            nombre: true,
          },
        },
        promocionProducto: {
          select: {
            id: true,
            nombre: true,
            codigoBarra: true,
          },
        },
        cantidad: true,
        created_at: true,
      },
    });
  }

  getOneCodigo(codigo: string) {
    return this.prisma.voucher.findFirst({
      where: { codigo: parseInt(codigo) },
      select: {
        id: true,
        codigo: true,
        fecha: true,
        canjeado: true,
        canjeadoFecha: true,
        promocionId: false,
        promocionVoucher: {
          select: {
            id: true,
            nombre: true,
          },
        },
        usuarioId: false,
        usuario: {
          select: {
            id: true,
            codigo: true,
            nombre: true,
          },
        },
        promocionProducto: {
          select: {
            id: true,
            nombre: true,
            codigoBarra: true,
          },
        },
        cantidad: true,
        created_at: true,
      },
    });
  }
}
