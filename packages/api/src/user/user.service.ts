import * as argon from 'argon2';
import { Model } from 'mongoose';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';

import { CreateUserDTO, EditUserDTO } from './dto';
import { UserInterface } from './interfaces';
import { CreateUserLoginDTO } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>,
    private jwtService: JwtService,
  ) {}

  async createUser(dto: CreateUserDTO) {
    const hash = await argon.hash(dto.password);

    const foundUser = await this.userModel.findOne({ email: dto.email });
    if (foundUser) throw new ForbiddenException('El email ya existe');

    const user = new this.userModel({
      email: dto.email,
      name: dto.name,
      password: hash,
    });

    await user.save();
    return await this.signInToken(user._id, user.email, user.name);
  }

  async loginUser(dto: CreateUserLoginDTO) {
    const user = await this.userModel.findOne({ email: dto.email });
    if (!user) throw new ForbiddenException('Credenciales incorrectos');

    const pwMatches = await argon.verify(user.password, dto.password);
    if (!pwMatches) throw new ForbiddenException('Credenciales incorrectos');

    return this.signInToken(user._id, user.email, user.name);
  }

  async signInToken(userId: string, email: string, name: string) {
    const payload = {
      id: userId,
      email,
      name,
    };

    const secret = process.env.JWT_SECRET;
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '72h',
      secret,
    });
    return token;
  }

  async updateUser(id: string, dto: EditUserDTO) {
    const currentUser = dto;

    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException('Usuario no encontrado');

    currentUser.password = await argon.hash(currentUser.password);

    const userUpdated = await this.userModel.findByIdAndUpdate(
      id,
      currentUser,
      { new: true },
    );
    return userUpdated;
  }

  async deleteUser(id: string) {
    const user = await this.userModel.findByIdAndDelete(id);
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

  async getUsers() {
    const users = await this.userModel.find({});
    if (!users) throw new NotFoundException('Usuario no encontrado');
    return users;
  }

  async getUser(id: string) {
    const user = await this.userModel.findById(id);
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }
}
