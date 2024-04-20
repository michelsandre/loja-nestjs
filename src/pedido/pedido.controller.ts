import { Controller, Get, Post, Query } from '@nestjs/common';
import { PedidoService } from './pedido.service';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Post()
  async cadastraPedido(@Query('usuarioId') usuarioId: string) {
    const pedido = await this.pedidoService.cadastraPedido(usuarioId);

    return pedido;
  }

  @Get()
  async listaPedidos() {
    return await this.pedidoService.listaPedidos();
  }
}
