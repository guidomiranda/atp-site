import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class EditFiltertDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsString()
  @IsOptional()
  line?: string;

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
  @IsOptional()
  status?: boolean;

  @IsNumber()
  @IsOptional()
  order?: number;
}
