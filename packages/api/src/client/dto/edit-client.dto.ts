import {
  IsArray,
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditClientDTO {
  @IsString()
  @IsOptional()
  title?: string;

  @IsArray()
  @IsOptional()
  description?: Description[];

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
