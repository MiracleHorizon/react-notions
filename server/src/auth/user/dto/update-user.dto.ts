import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  avatarUrl: string | null

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password: string

  @IsOptional()
  @IsEmail()
  @IsNotEmpty()
  email: string
}
