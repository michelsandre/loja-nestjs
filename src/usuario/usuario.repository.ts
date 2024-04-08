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

  async existeComEmail(email: string) {
    const possivelUsuario = this.usuarios.find(
      (usuario) => usuario.email === email,
    );

    return possivelUsuario !== undefined;
  }
}
