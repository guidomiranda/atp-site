import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BannerInterface } from './interfaces/banner.interface';
import { CreateBannerDTO } from './dto';

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
}
