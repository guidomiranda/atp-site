import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsString,
} from 'class-validator';

export class EditSuccessDTO {
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
