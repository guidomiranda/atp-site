import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateSuccessDTO, EditSuccessDTO } from './dto';
import { SuccessInterface } from './interfaces';

@Injectable()
export class SuccessService {
  constructor(
    @InjectModel('Success')
    private readonly successModel: Model<SuccessInterface>,
  ) {}

  async createSuccess(dto: CreateSuccessDTO) {
    const info = new this.successModel(dto);
    if (!info) throw new NotFoundException('Post no encontrado');
    return await info.save();
  }

  async editSuccess(id: string, dto: EditSuccessDTO) {
    const info = await this.successModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    if (!info) throw new NotFoundException('Post no encontrado');
    return info;
  }

  async deleteSuccess(id: string) {
    const info = await this.successModel.findByIdAndDelete(id);
    if (!info) throw new NotFoundException('Post no encontrado');
    return info;
  }

  async getSuccesses() {
    const infos = await this.successModel.find({});
    if (!infos) throw new NotFoundException('Post no encontrado');
    return infos;
  }

  async getSuccess(id: string) {
    const info = await this.successModel.findById(id);
    if (!info) throw new NotFoundException('Post no encontrado');
    return info;
  }
}
