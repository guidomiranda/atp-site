import * as argon from 'argon2';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { CreateUserDTO, EditUserDTO, CreateUserLoginDTO } from './dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async createUser(dto: CreateUserDTO) {
    const hash = await argon.hash(dto.password);

    const foundUser = await this.prisma.user.findFirst({
      where: { email: dto.email },
    });
    if (foundUser) throw new ForbiddenException('El email ya existe');

    const user = await this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        role: 'ADMIN',
        password: hash,
        created_at: new Date().toISOString(),
      },
    });

    return await this.signInToken(user.id, user.email, user.name);
  }

  async loginUser(dto: CreateUserLoginDTO) {
    const user = await this.prisma.user.findFirst({
      where: { email: dto.email },
    });
    if (!user) throw new ForbiddenException('Credenciales incorrectos');

    const pwMatches = await argon.verify(user.password, dto.password);
    if (!pwMatches) throw new ForbiddenException('Credenciales incorrectos');

    return this.signInToken(user.id, user.email, user.name);
  }

  async signInToken(userId: string, email: string, name: string) {
    const payload = {
      id: userId,
      email,
      name,
    };

    const secret = 'aGFyZCF0by1ndWVzc19zZWNyZXQ';
    const token = await this.jwtService.signAsync(payload, {
      expiresIn: '72h',
      secret,
    });
    return token;
  }

  async updateUser(id: string, dto: EditUserDTO) {
    const currentUser = dto;

    const user = await this.prisma.user.findFirst({ where: { id } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    currentUser.password = await argon.hash(currentUser.password);

    return this.prisma.user.update({
      where: { id },
      data: { ...currentUser },
    });
  }

  async deleteUser(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }

  async getUsers() {
    return this.prisma.user.findMany({});
  }

  async getUser(id: string) {
    return this.prisma.user.findFirst({ where: { id } });
  }
}
