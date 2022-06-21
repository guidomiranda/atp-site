import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateClientDTO } from './dto';
import { ClientInterface } from './interfaces';
import { EditClientDTO } from './dto/edit-client.dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel('Client') private readonly clientModel: Model<ClientInterface>,
  ) {}

  async createClient(dto: CreateClientDTO) {
    const client = new this.clientModel(dto);
    if (!client) throw new NotFoundException('Cliente no encontrado');
    return await client.save();
  }

  async updateClient(id: string, dto: EditClientDTO) {
    const client = await this.clientModel.findByIdAndUpdate(id, dto, {
      new: true,
    });
    if (!client) throw new NotFoundException('Cliente no encontrado');
    return client;
  }

  async deleteClient(id: string) {
    const client = await this.clientModel.findByIdAndDelete(id);
    if (!client) throw new NotFoundException('Cliente no encontrado');
    return client;
  }

  async getClients() {
    const clients = await this.clientModel.find({});
    if (!clients) throw new NotFoundException('Cliente no encontrado');
    return clients;
  }

  async getClient(id: string) {
    const client = await this.clientModel.findById(id);
    if (!client) throw new NotFoundException('Cliente no encontrado');
    return client;
  }
}
