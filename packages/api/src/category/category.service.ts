import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductInterface } from 'src/product/interfaces';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductInterface>,
  ) {}

  async getProducts(type: string) {
    const products = await this.productModel.find({}).where({ category: type });
    if (!products) throw new NotFoundException('Productos no encontrado');
    return products;
  }
}
