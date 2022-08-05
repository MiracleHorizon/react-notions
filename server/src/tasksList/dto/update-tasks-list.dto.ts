import {
  IsBoolean,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export default class UpdateTasksListDto {
  @IsOptional()
  @IsMongoId()
  @IsNotEmpty()
  parentPageId?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  color: string

  @IsOptional()
  @IsBoolean()
  @IsNotEmpty()
  hidden: boolean

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  position?: number
}
