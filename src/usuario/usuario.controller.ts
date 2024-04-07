import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criar(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    const novoUsuario = this.usuarioRepository.salvar(dadosDoUsuario);
    return novoUsuario;
  }

  @Get()
  async listaTodos() {
    return this.usuarioRepository.listarTodos();
  }
}
