import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async getProducts(type: string) {
    return this.prisma.product.findMany({ where: { category: type } });
  }
}
