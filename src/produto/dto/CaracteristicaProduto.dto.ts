import { IsNotEmpty, IsString } from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}
