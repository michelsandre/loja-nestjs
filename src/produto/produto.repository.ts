import { Injectable } from '@nestjs/common';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';

@Injectable()
export class ProdutoRepository {
  private produtos = [];

  async salvar(produto: CriaProdutoDTO) {
    this.produtos.push(produto);
  }

  async listaTodos() {
    return this.produtos;
  }
}
