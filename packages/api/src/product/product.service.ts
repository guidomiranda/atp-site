import { Injectable } from '@nestjs/common';

import { CreateProductDTO, EditProductDTO } from './dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(dto: CreateProductDTO) {
    return this.prisma.product.create({
      data: {
        ...dto,
        status: true,
        order: 1,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    });
  }

  async updateProduct(id: string, dto: EditProductDTO) {
    return this.prisma.product.update({
      where: { id },
      data: { ...dto, updated_at: new Date().toISOString() },
    });
  }

  async deleteProduct(id: string) {
    return this.prisma.product.delete({ where: { id } });
  }

  async getProducts() {
    return this.prisma.product.findMany();
  }

  async getProduct(id: string) {
    return this.prisma.product.findFirst({ where: { id } });
  }
}
