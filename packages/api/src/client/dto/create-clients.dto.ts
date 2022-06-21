import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateClientDTO {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsNotEmpty()
  description: Description[];

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
