import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsOptional()
  capacity?: string;

  @IsString()
  @IsOptional()
  cca10?: string;

  @IsString()
  @IsOptional()
  polarity?: string;

  @IsString()
  @IsOptional()
  large?: string;

  @IsString()
  @IsOptional()
  width?: string;

  @IsString()
  @IsOptional()
  height?: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsNumber()
  @IsNotEmpty()
  order: boolean;
}
