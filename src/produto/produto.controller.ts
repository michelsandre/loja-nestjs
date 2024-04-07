import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';

@Controller('produtos')
export class ProdutoController {
  constructor(private produtoRepository: ProdutoRepository) {}

  @Post()
  async criar(@Body() dadosDoProduto: CriaProdutoDTO) {
    const novoProduto = this.produtoRepository.salvar(dadosDoProduto);
    return novoProduto;
  }

  @Get()
  async listaTodos() {
    return this.produtoRepository.listaTodos();
  }
}
