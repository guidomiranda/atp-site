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

import { FilterService } from './filter.service';
import { CreateFiltertDTO, EditFiltertDTO } from './dto';

@Controller('filter')
export class FilterController {
  constructor(private filterService: FilterService) {}

  @Post('/create')
  async createFilter(
    @Res() res: Response,
    @Body() createFilterDTO: CreateFiltertDTO,
  ) {
    const filter = await this.filterService.createFilter(createFilterDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Filtro creado',
      success: true,
      filter,
    });
  }

  @Patch('/:id')
  async updateFilter(
    @Res() res: Response,
    @Param('id') id: string,
    @Body() updateFilterDTO: EditFiltertDTO,
  ) {
    const filter = await this.filterService.updateFilter(id, updateFilterDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Filtro actualizado',
      success: true,
      filter,
    });
  }

  @Delete('/:id')
  async deleteFilter(@Res() res: Response, @Param('id') id: string) {
    const filter = await this.filterService.deleteFilter(id);
    return res.status(HttpStatus.OK).json({
      message: 'Filtro eliminado',
      success: true,
      filter,
    });
  }

  @Get()
  async getFilters(@Res() res: Response) {
    const filters = await this.filterService.getFilters();
    return res.status(HttpStatus.OK).json({
      message: 'Filtros',
      success: true,
      filters,
    });
  }

  @Get('/:id')
  async getFilter(@Res() res: Response, @Param('id') id: string) {
    const filter = await this.filterService.getFilter(id);
    return res.status(HttpStatus.OK).json({
      message: 'Filtro',
      success: true,
      filter,
    });
  }

  @Get('/type/:type')
  async getFiltersByType(@Res() res: Response, @Param('type') type: string) {
    const filters = await this.filterService.getFiltersByType(type);
    return res.status(HttpStatus.OK).json({
      message: 'Filtros por tipo',
      success: true,
      filters,
    });
  }

  @Get('/line/:line')
  async getFiltersByLine(@Res() res: Response, @Param('line') line: string) {
    const filters = await this.filterService.getFilterByLine(line);
    console.log(line);

    return res.status(HttpStatus.OK).json({
      message: 'Filtros por línea',
      success: true,
      filters,
    });
  }
}
