import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLubVehLiviano {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsArray()
  @IsNotEmpty()
  description: string[];

  @IsArray()
  @IsNotEmpty()
  presentacion: string;

  @IsArray()
  @IsNotEmpty()
  indicado_para: string;

  @IsArray()
  @IsNotEmpty()
  especificacion: string;

  @IsArray()
  @IsOptional()
  image?: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsNumber()
  @IsNotEmpty()
  order: number;

  @IsString()
  @IsNotEmpty()
  created_at: string;

  @IsString()
  @IsNotEmpty()
  updated_at: string;
}
