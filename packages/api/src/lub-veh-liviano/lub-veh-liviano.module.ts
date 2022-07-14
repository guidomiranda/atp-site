import { Module } from '@nestjs/common';

import { LubVehLivianoService } from './lub-veh-liviano.service';
import { LubVehLivianoController } from './lub-veh-liviano.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [LubVehLivianoService],
  controllers: [LubVehLivianoController],
})
export class LubVehLivianoModule {}
