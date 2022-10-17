import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SequenceService {
  constructor(private prisma: PrismaService) {}

  create(dto: any) {
    return this.prisma.sequence.create({ data: { ...dto } });
  }

  update(id: string, dto: any) {
    return this.prisma.sequence.update({
      where: { id },
      data: { ...dto },
    });
  }

  delete(id: string) {
    return this.prisma.sequence.delete({ where: { id } });
  }

  getAll() {
    return this.prisma.sequence.findMany();
  }

  getOne(id: string) {
    return this.prisma.sequence.findFirst({ where: { id } });
  }
}
