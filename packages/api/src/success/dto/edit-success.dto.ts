import {
  IsArray,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsString,
} from 'class-validator';

export class EditSuccessDTO {
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
