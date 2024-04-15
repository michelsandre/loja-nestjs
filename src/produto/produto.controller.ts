import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoService } from './produto.service';
import { ProdutoEntity } from './produto.entity';

@Controller('produtos')
export class ProdutoController {
  constructor(
    private produtoRepository: ProdutoRepository,
    private produtoService: ProdutoService,
  ) {}

  @Post()
  async criar(@Body() dadosDoProduto: CriaProdutoDTO) {
    const produto = new ProdutoEntity();
    Object.assign(produto, dadosDoProduto);

    const novoProduto = await this.produtoService.criaProduto(produto);
    return novoProduto;
  }

  @Get()
  async listaTodos() {
    return this.produtoService.listaProdutos();
  }

  @Put('/:id')
  async atualizaProduto(
    @Param('id') id: string,
    @Body() produto: Partial<ProdutoEntity>,
  ) {
    await this.produtoService.atualizaProduto(id, produto);
    return {
      message: 'Produto atualizado com sucesso',
    };
  }

  @Delete('/:id')
  async deletaProduto(@Param('id') id: string) {
    await this.produtoService.deletaProduto(id);
    return {
      message: 'Produto removido com sucesso!',
    };
  }
}
