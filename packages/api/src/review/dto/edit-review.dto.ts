import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditReviewDTO {
  @IsArray()
  @IsOptional()
  body?: string[];

  @IsString()
  @IsOptional()
  author?: string;

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
