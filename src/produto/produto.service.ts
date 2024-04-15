import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from './produto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private produtoRepository: Repository<ProdutoEntity>,
  ) {}

  async listaProdutos() {
    return await this.produtoRepository.find();
  }
  async criaProduto(produto: ProdutoEntity) {
    const novoProduto = await this.produtoRepository.save(produto);
    return novoProduto;
  }

  async atualizaProduto(id: string, produto: Partial<ProdutoEntity>) {
    await this.produtoRepository.update(id, produto);
  }

  async deletaProduto(id: string) {
    await this.produtoRepository.delete(id);
  }
}
