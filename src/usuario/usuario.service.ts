import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { Repository } from 'typeorm';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async listaUsuarios() {
    const usuarios = await this.usuarioRepository.find();
    const usuariosLista = usuarios.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome),
    );

    return usuariosLista;
  }

  async criaUsuario(usuario: UsuarioEntity) {
    const emailExiste = await this.usuarioRepository.findOne({
      where: { email: usuario.email },
    });

    if (emailExiste)
      throw new HttpException(
        'Já existe um usuario com este email',
        HttpStatus.BAD_REQUEST,
      );

    const novoUsuario = await this.usuarioRepository.save(usuario);
    return novoUsuario;
  }

  async atualizaUsuario(id: string, usuario: Partial<UsuarioEntity>) {
    await this.usuarioRepository.update(id, usuario);
  }

  async deletaUsuario(id: string) {
    await this.usuarioRepository.delete(id);
  }
}
