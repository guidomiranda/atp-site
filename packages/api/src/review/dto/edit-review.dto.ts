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
  body?: Description[];

  @IsString()
  @IsOptional()
  author?: string;

  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @IsNumber()
  @IsOptional()
  order?: number;
}

type Description = {
  id: string;
  text: string;
};
