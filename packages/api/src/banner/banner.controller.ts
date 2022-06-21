import { Response } from 'express';
import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';

import { BannerService } from './banner.service';
import { CreateBannerDTO } from './dto';

@Controller('banner')
export class BannerController {
  constructor(private bannerService: BannerService) {}

  @Post('/create')
  async createBanner(@Res() res: Response, @Body() dto: CreateBannerDTO) {
    const banner = await this.bannerService.createBanner(dto);

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Banner creado', success: true, banner });
  }
}
