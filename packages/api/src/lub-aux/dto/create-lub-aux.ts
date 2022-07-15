import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateLubAux {
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

  @IsBoolean()
  @IsNotEmpty()
  rec_honda: boolean;

  @IsArray()
  @IsNotEmpty()
  image: string;

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
