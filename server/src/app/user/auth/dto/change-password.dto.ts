import { IsNotEmpty, IsString } from 'class-validator'

export class ChangePasswordDto {
  @IsString()
  @IsNotEmpty()
  oldPass: string

  @IsString()
  @IsNotEmpty()
  newPass: string
}
