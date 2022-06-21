import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateBannerDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  image: string;

  @IsString()
  @IsNotEmpty()
  bg: string;

  @IsArray()
  description: Description[];
}

type Description = {
  id: string;
  text: string;
};
