import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateLubVehPesado {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsArray()
  @IsNotEmpty()
  description: string[];

  @IsArray()
  @IsNotEmpty()
  caracteristicas: string[];

  @IsString()
  @IsNotEmpty()
  presentacion: string;

  @IsString()
  @IsNotEmpty()
  rec_exxon_mob: string;

  @IsString()
  @IsNotEmpty()
  atiende_excede: string;

  @IsString()
  @IsNotEmpty()
  aprobado: string;

  @IsString()
  @IsOptional()
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
