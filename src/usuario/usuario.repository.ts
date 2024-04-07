import { Injectable } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';

@Injectable()
export class UsuarioRepository {
  private usuarios = [];

  async salvar(usuario: CriaUsuarioDTO) {
    this.usuarios.push(usuario);
  }

  async listarTodos() {
    return this.usuarios;
  }
}
