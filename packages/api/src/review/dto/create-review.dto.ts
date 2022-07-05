import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateReviewDTO {
  @IsArray()
  @IsNotEmpty()
  body: string[];

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsNumber()
  @IsNotEmpty()
  order: number;

  @IsString()
  @IsNotEmpty()
  created_at: string;
}
