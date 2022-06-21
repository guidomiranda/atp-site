import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateBannerDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  image: string;

  @IsString()
  @IsNotEmpty()
  bg: string;

  @IsNumber()
  @IsNotEmpty()
  order: number;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsArray()
  description: Description[];
}

type Description = {
  id: string;
  text: string;
};
