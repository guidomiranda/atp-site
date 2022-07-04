import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { BannerModule } from './banner/banner.module';
// import { ReviewModule } from './review/review.module';
// import { ClientsModule } from './client/client.module';
// import { SuccessModule } from './success/success.module';
// import { ProductModule } from './product/product.module';
// import { UserModule } from './user/user.module';
// import { CategoryModule } from './category/category.module';
// import { FilterModule } from './filter/filter.module';
import { PrismaService } from '../prisma/prisma.service';
import { BannerService } from './banner/banner.service';
import { BannerController } from './banner/banner.controller';

@Module({
  imports: [],
  controllers: [AppController, BannerController],
  providers: [AppService, BannerService, PrismaService],
})
export class AppModule {}
