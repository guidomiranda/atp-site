import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateUserDTO } from './dto';
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
}
