import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { BannerInterface } from './interfaces/banner.interface';
import { CreateBannerDTO, EditBannerDTO } from './dto';

@Injectable()
export class BannerService {
  constructor(
    @InjectModel('Banner')
    private readonly serviceBanner: Model<BannerInterface>,
  ) {}

  async createBanner(dto: CreateBannerDTO) {
    const banner = new this.serviceBanner(dto);
    if (!banner) throw new NotFoundException('Banner no encontrado');
    return await banner.save();
  }

  async updateBanner(id: string, dto: EditBannerDTO) {
    const banner = await this.serviceBanner.findByIdAndUpdate(id, dto, {
      new: true,
    });
    if (!banner) throw new NotFoundException('Banner no encontrado');
    return banner;
  }

  async deleteBanner(id: string) {
    const banner = await this.serviceBanner.findByIdAndDelete(id);
    if (!banner) throw new NotFoundException('Banner no encontrado');
    return banner;
  }

  async getBanners() {
    const banners = await this.serviceBanner.find({});
    if (!banners) throw new NotFoundException('Banners no encontrado');
    return banners;
  }
}
