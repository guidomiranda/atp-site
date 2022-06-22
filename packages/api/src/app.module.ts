import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BannerModule } from './banner/banner.module';
import { ReviewModule } from './review/review.module';
import { ClientsModule } from './client/client.module';
import { SuccessModule } from './success/success.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      useNewUrlParser: true,
    }),
    BannerModule,
    ReviewModule,
    ClientsModule,
    SuccessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
