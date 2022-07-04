import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateClientDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsNotEmpty()
  description: string[];

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsNumber()
  @IsNotEmpty()
  order: number;

  @IsNumber()
  @IsNotEmpty()
  created_at: string;
}
