import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { MascotasModule } from '../mascotas/mascotas.module';
import { MascotasService } from 'src/mascotas/mascotas.service';

@Module({
    imports: [MascotasModule], // así se puede inyectar MascotasService
    controllers: [UsuariosController],
    providers: [UsuariosService, MascotasService],
})
export class UsuariosModule {}
