import { Module } from '@nestjs/common';

import { ClientsService } from './client.service';
import { ClientsController } from './client.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [ClientsService],
  controllers: [ClientsController],
})
export class ClientsModule {}
