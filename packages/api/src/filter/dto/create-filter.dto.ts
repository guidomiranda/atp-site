import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateFiltertDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  line: string;

  @IsString()
  @IsOptional()
  // Dia.Ext.
  dia_ext?: string;

  @IsString()
  @IsOptional()
  // Altura
  height?: string;

  @IsString()
  @IsOptional()
  // Dia. Int.
  dia_int?: string;

  @IsString()
  @IsOptional()
  // Rosca
  thread?: string;

  @IsString()
  @IsOptional()
  // Válvula anti retorno
  val_anti_ret?: string;

  @IsString()
  @IsOptional()
  //  Válvula alívio
  val_ali?: string;

  @IsString()
  @IsOptional()
  //  Válvula alívio
  model?: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsNumber()
  @IsNotEmpty()
  order: number;
}
