import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateLubVehLiviano {
  @IsString()
  @IsOptional()
  nombre?: string;

  @IsArray()
  @IsOptional()
  description?: string[];

  @IsArray()
  @IsOptional()
  presentacion?: string;

  @IsArray()
  @IsOptional()
  indicado_para?: string;

  @IsArray()
  @IsOptional()
  especificacion?: string;

  @IsArray()
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
