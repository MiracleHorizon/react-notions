import {
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export default class UpdatePageDto {
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  parentPageId?: string | null

  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  parentListId?: string | null

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  template?: string

  @IsOptional()
  @IsNotEmpty()
  status?: string | null

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string

  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  fullWidth?: boolean

  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  smallText?: boolean

  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  favorite?: boolean

  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  expanded?: boolean

  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  locked?: boolean

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  font?: string

  @IsOptional()
  @IsNotEmpty()
  iconUrl?: string | null

  @IsOptional()
  @IsNotEmpty()
  coverUrl?: string | null

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  coverPosition?: number

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  sbOrder: number | null

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  taskOrder: number | null
}
