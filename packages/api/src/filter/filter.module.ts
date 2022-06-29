import { Module } from '@nestjs/common';
import { FilterService } from './filter.service';
import { FilterController } from './filter.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FilterSchema } from './schema/filter.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Filter', schema: FilterSchema }]),
  ],
  providers: [FilterService],
  controllers: [FilterController],
})
export class FilterModule {}
