import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { FilterInterface } from './interfaces';
import { CreateFiltertDTO, EditFiltertDTO } from './dto';

@Injectable()
export class FilterService {
  constructor(
    @InjectModel('Filter') private readonly filterModel: Model<FilterInterface>,
  ) {}

  async createFilter(createFilterDTO: CreateFiltertDTO) {
    const filter = new this.filterModel(createFilterDTO);
    if (!filter) throw new NotFoundException('Filtro no encontrado');
    return await filter.save();
  }

  async updateFilter(id: string, updateFilterDTO: EditFiltertDTO) {
    const filter = await this.filterModel.findByIdAndUpdate(
      id,
      updateFilterDTO,
      { new: true },
    );
    if (!filter) throw new NotFoundException('Filtro no encontrado');
    return filter;
  }

  async deleteFilter(id: string) {
    const filter = await this.filterModel.findByIdAndDelete(id);
    if (!filter) throw new NotFoundException('Filtro no encontrado');
    return filter;
  }

  async getFilters() {
    const filters = await this.filterModel.find({});
    if (!filters) throw new NotFoundException('Filtro no encontrado');
    return filters;
  }

  async getFilterByLine(line: string) {
    const filters = await this.filterModel.find({ line });
    if (!filters) throw new NotFoundException('Filtro no encontrado');
    return filters;
  }

  async getFiltersByType(type: string) {
    const filters = await this.filterModel.find({ type });
    if (!filters) throw new NotFoundException('Filtro no encontrado');
    return filters;
  }

  async getFilter(id: string) {
    const filter = await this.filterModel.findById(id);
    if (!filter) throw new NotFoundException('Filtro no encontrado');
    return filter;
  }
}
