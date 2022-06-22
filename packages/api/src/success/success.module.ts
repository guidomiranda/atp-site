import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SuccessService } from './success.service';
import { SuccessController } from './success.controller';
import { SuccessSchema } from './schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Success', schema: SuccessSchema }]),
  ],
  providers: [SuccessService],
  controllers: [SuccessController],
})
export class SuccessModule {}
