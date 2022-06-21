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
  body: Description[];

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsNumber()
  @IsNotEmpty()
  order: number;
}

type Description = {
  id: string;
  text: string;
};
