import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateLubVehPesado {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsArray()
  @IsOptional()
  description?: string[];

  @IsArray()
  @IsOptional()
  caracteristicas?: string[];

  @IsString()
  @IsOptional()
  presentacion?: string;

  @IsString()
  @IsOptional()
  rec_exxon_mob?: string;

  @IsString()
  @IsOptional()
  atiende_excede?: string;

  @IsString()
  @IsOptional()
  aprobado?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @IsNumber()
  @IsOptional()
  order?: number;

  @IsString()
  @IsOptional()
  created_at?: string;

  @IsString()
  @IsOptional()
  updated_at?: string;
}
