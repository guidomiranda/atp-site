import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from './schema';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({ secret: 'aGFyZCF0by1ndWVzc19zZWNyZXQ=' }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
