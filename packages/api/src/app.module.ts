import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BannerModule } from './banner/banner.module';
import { ReviewModule } from './review/review.module';
import { ClientsModule } from './client/client.module';
import { SuccessModule } from './success/success.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { FilterModule } from './filter/filter.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:SKw1uBmjMKhUJYnd@atpweb.yvwa6.mongodb.net/atpdatabase?retryWrites=true&w=majority',
    ),
    BannerModule,
    ReviewModule,
    ClientsModule,
    SuccessModule,
    ProductModule,
    UserModule,
    CategoryModule,
    FilterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
