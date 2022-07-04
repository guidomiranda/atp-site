import { Response } from 'express';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

import { BannerService } from './banner.service';
import { CreateBannerDTO, EditBannerDTO } from './dto';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Post('/create')
  async createBanner(@Res() res: Response, @Body() dto: CreateBannerDTO) {
    const banner = await this.bannerService.createBanner(dto);
    console.log(dto);

    return res
      .status(HttpStatus.OK)
      .json({ message: 'Banner creado', success: true, banner });
  }

  @Patch('/:id')
  async editBanner(
    @Res() res: Response,
    @Body() dto: EditBannerDTO,
    @Param('id') id: string,
  ) {
    const banner = await this.bannerService.updateBanner(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Banner actualizado',
      success: true,
      banner,
    });
  }

  @Delete('/:id')
  async deleteBanner(@Res() res: Response, @Param('id') id: string) {
    const banner = await this.bannerService.deleteBanner(id);
    return res.status(HttpStatus.OK).json({
      message: 'Banner eliminado',
      success: true,
      banner,
    });
  }

  @Get()
  async getBanners(@Res() res: Response) {
    const banners = await this.bannerService.getBanners();
    return res.status(HttpStatus.OK).json({
      message: 'Banners',
      success: true,
      banners,
    });
  }

  @Get('/:id')
  async getBanner(@Res() res: Response, @Param('id') id: string) {
    const banner = await this.bannerService.getBanner(id);
    return res.status(HttpStatus.OK).json({
      message: 'Banner',
      success: true,
      banner,
    });
  }
}
