import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditClientDTO {
  @IsString()
  @IsOptional()
  title?: string;

  @IsArray()
  @IsOptional()
  description?: string[];

  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @IsNumber()
  @IsOptional()
  order?: number;

  @IsString()
  @IsOptional()
  created_at?: string;
}
