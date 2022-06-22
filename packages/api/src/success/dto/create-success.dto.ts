import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateSuccessDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsNotEmpty()
  description: Description[];
}

type Description = {
  id: string;
  text: string;
};
