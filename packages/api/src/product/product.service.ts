import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { ProductInterface } from './interfaces';
import { CreateProductDTO, EditProductDTO } from './dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductInterface>,
  ) {}

  async createProduct(dto: CreateProductDTO) {
    const product = new this.productModel(dto);
    if (!product) throw new NotFoundException('Producto no encontrado');
    return await product.save();
  }

  async updateProduct(id: string, dto: EditProductDTO) {
    const product = await this.productModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }

  async deleteProduct(id: string) {
    const product = await this.productModel.findByIdAndDelete(id);
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }

  async getProducts() {
    const products = await this.productModel.find({});
    if (!products) throw new NotFoundException('Productos no encontrado');
    return products;
  }

  async getProduct(id: string) {
    const product = await this.productModel.findById(id);
    if (!product) throw new NotFoundException('Producto no encontrado');
    return product;
  }
}
