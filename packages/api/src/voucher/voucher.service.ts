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
    return this.prisma.voucher.findMany();
  }

  getOne(id: string) {
    return this.prisma.voucher.findFirst({ where: { id } });
  }

  getOneCodigo(codigo: string) {
    return this.prisma.voucher.findFirst({
      where: { codigo: parseInt(codigo) },
    });
  }
}
