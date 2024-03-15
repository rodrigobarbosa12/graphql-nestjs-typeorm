import { IsNotEmpty, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AppBodyCreate {
  @ApiProperty()
  @Length(0, 100)
  name: string

  @ApiProperty()
  @IsNotEmpty({
    message: 'E-mail é obrigatório',
  })
  @Length(0, 80)
  email: string

  @ApiProperty()
  @IsNotEmpty({
    message: 'Senha é obrigatória',
  })
  @Length(0, 120)
  password: string
}
