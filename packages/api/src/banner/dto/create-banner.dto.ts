import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateBannerDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  image: string;

  @IsString()
  @IsNotEmpty()
  bg: string;

  @IsNumber()
  @IsNotEmpty()
  order: number;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsArray()
  description: string[];

  @IsBoolean()
  @IsNotEmpty()
  created_at: string;
}
