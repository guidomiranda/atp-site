import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class VacanciasService {
  constructor(private prisma: PrismaService) {}

  create(dto: any) {
    return this.prisma.vacancias.create({ data: { ...dto } });
  }

  update(id: string, dto: any) {
    return this.prisma.vacancias.update({ where: { id }, data: { ...dto } });
  }

  delete(id: string) {
    return this.prisma.vacancias.delete({ where: { id } });
  }

  getAll() {
    return this.prisma.vacancias.findMany();
  }

  getByArea(area: string) {
    return this.prisma.vacancias.findMany({ where: { area } });
  }

  getOne(id: string) {
    return this.prisma.vacancias.findFirst({ where: { id } });
  }
}
