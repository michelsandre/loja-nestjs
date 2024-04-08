import { Body, Controller, Get, Post } from '@nestjs/common';

import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criar(@Body() dadosDoUsuario: CriaUsuarioDTO) {
    this.usuarioRepository.salvar(dadosDoUsuario);
    return dadosDoUsuario;
  }

  @Get()
  async listarTodos() {
    return this.usuarioRepository.listarTodos();
  }
}
