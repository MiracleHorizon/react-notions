import {
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export default class UpdateNotionContentItemDto {
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  parentPageId?: string | null

  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  parentItemId?: string | null

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  type?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  content?: string

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  order?: number

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  color?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  bgColor?: string

  @IsOptional()
  @IsNotEmpty()
  expanded?: boolean | null

  @IsOptional()
  @IsNotEmpty()
  completed?: boolean | null

  @IsOptional()
  @IsNotEmpty()
  iconUrl?: string | null

  @IsOptional()
  @IsNotEmpty()
  pageId?: string | null
}
