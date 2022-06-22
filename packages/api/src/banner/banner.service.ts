import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { BannerInterface } from './interfaces';
import { CreateBannerDTO, EditBannerDTO } from './dto';

@Injectable()
export class BannerService {
  constructor(
    @InjectModel('Banner')
    private readonly serviceModel: Model<BannerInterface>,
  ) {}

  async createBanner(dto: CreateBannerDTO) {
    const banner = new this.serviceModel(dto);
    if (!banner) throw new NotFoundException('Banner no encontrado');
    return await banner.save();
  }

  async updateBanner(id: string, dto: EditBannerDTO) {
    const banner = await this.serviceModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    if (!banner) throw new NotFoundException('Banner no encontrado');
    return banner;
  }

  async deleteBanner(id: string) {
    const banner = await this.serviceModel.findByIdAndDelete(id);
    if (!banner) throw new NotFoundException('Banner no encontrado');
    return banner;
  }

  async getBanners() {
    const banners = await this.serviceModel.find({});
    if (!banners) throw new NotFoundException('Banners no encontrado');
    return banners;
  }

  async getBanner(id: string) {
    const banner = await this.serviceModel.findById(id);
    if (!banner) throw new NotFoundException('Banners no encontrado');
    return banner;
  }
}
