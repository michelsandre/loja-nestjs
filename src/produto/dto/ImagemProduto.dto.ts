import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class ImagemProdutoDTO {
  @IsUrl()
  url: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}
