import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsString,
} from 'class-validator';

export class UpdateLubAux {
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

  @IsBoolean()
  @IsOptional()
  rec_honda?: boolean;

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
