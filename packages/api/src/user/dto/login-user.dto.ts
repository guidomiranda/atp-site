import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserLoginDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
