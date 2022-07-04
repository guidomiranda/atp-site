import { Injectable } from '@nestjs/common';

import { CreateBannerDTO, EditBannerDTO } from './dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BannerService {
  constructor(private prisma: PrismaService) {}

  async createBanner(dto: CreateBannerDTO) {
    return this.prisma.banner.create({
      data: {
        ...dto,
        status: true,
        order: 1,
        created_at: new Date().toISOString(),
      },
    });
  }

  async updateBanner(id: string, dto: EditBannerDTO) {
    return this.prisma.banner.update({
      where: { id },
      data: { ...dto },
    });
  }

  async deleteBanner(id: string) {
    return this.prisma.banner.delete({ where: { id } });
  }

  async getBanners() {
    return this.prisma.banner.findMany();
  }

  async getBanner(id: string) {
    return this.prisma.banner.findFirst({ where: { id } });
  }
}
