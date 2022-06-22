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
import { Response } from 'express';

import { CreateUserDTO, EditUserDTO } from './dto';
import { CreateUserLoginDTO } from './dto/login-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/create')
  async createUser(@Res() res: Response, @Body() dto: CreateUserDTO) {
    const user = await this.userService.createUser(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Usuario creado',
      sucess: true,
      user,
    });
  }

  @Post('/login')
  async loginUser(@Res() res: Response, @Body() dto: CreateUserLoginDTO) {
    const user = await this.userService.loginUser(dto);
    return res.status(HttpStatus.OK).json({
      message: 'Usuario logueado',
      success: true,
      user,
    });
  }

  @Patch('/:id')
  async updateUser(
    @Res() res: Response,
    @Body() dto: EditUserDTO,
    @Param('id') id: string,
  ) {
    const user = await this.userService.updateUser(id, dto);
    return res.status(HttpStatus.OK).json({
      message: 'Usuario actualizado',
      success: true,
      user,
    });
  }

  @Delete('/:id')
  async deleteUser(@Res() res: Response, @Param('id') id: string) {
    const user = await this.userService.deleteUser(id);
    return res.status(HttpStatus.OK).json({
      message: 'Usuario eliminado',
      success: true,
      user,
    });
  }

  @Get()
  async getUsers(@Res() res: Response) {
    const users = await this.userService.getUsers();
    return res.status(HttpStatus.OK).json({
      message: 'Usuarios',
      success: true,
      users,
    });
  }

  @Get('/:id')
  async getUser(@Res() res: Response, @Param('id') id: string) {
    const user = await this.userService.getUser(id);
    return res.status(HttpStatus.OK).json({
      message: 'Usuario',
      success: true,
      user,
    });
  }
}
