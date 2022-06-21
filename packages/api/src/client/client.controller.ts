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

import { ClientsService } from './client.service';
import { CreateClientDTO } from './dto';
import { EditClientDTO } from './dto/edit-client.dto';

@Controller('client')
export class ClientsController {
  constructor(private clientService: ClientsService) {}

  @Post('/create')
  async createClient(@Res() res: Response, @Body() dto: CreateClientDTO) {
    const client = await this.clientService.createClient(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Cliente creado',
      success: true,
      client,
    });
  }

  @Patch('/:id')
  async editClient(
    @Res() res: Response,
    @Body() dto: EditClientDTO,
    @Param('id') id: string,
  ) {
    const client = await this.clientService.updateClient(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Cliente actualizado',
      success: true,
      client,
    });
  }

  @Delete('/:id')
  async deleteClient(@Res() res: Response, @Param('id') id: string) {
    const client = await this.clientService.deleteClient(id);
    return res.status(HttpStatus.OK).json({
      message: 'Cliente eliminado',
      success: true,
      client,
    });
  }

  @Get()
  async getClients(@Res() res: Response) {
    const clients = await this.clientService.getClients();
    return res.status(HttpStatus.OK).json({
      message: 'Clientes',
      success: true,
      clients,
    });
  }

  @Get('/:id')
  async getClient(@Res() res: Response, @Param('id') id: string) {
    const client = await this.clientService.getClient(id);
    return res.status(HttpStatus.OK).json({
      message: 'Cliente',
      success: true,
      client,
    });
  }
}
