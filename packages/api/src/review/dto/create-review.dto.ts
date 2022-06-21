import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateReviewDTO {
  @IsString()
  @IsNotEmpty()
  body: string;

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
