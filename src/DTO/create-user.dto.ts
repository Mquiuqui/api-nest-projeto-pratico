/* eslint-disable */
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "O nome é obrigatório." })
  name: string;

  @IsEmail({}, { message: "O e-mail deve ser válido." })
  email: string;
}
