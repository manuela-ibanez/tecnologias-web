import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { AutentificacionController } from './autentificacion/autentificacion.controller';
import { MascotasController } from './mascotas/mascotas.controller';
import { ServiciosController } from './servicios/servicios.controller';
import { TurnosController } from './turnos/turnos.controller';
import { AdminController } from './admin/admin.controller';
import { MascotasService } from './mascotas/mascotas.service';
import { MascotasModule } from './mascotas/mascotas.module';
import { UsuariosService } from './usuarios/usuarios.service';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [MascotasModule, UsuariosModule],
  controllers: [AppController,
                UsuariosController, 
                AutentificacionController, 
                MascotasController, 
                ServiciosController, 
                TurnosController, 
                AdminController],
  providers: [AppService, MascotasService, UsuariosService],
})
export class AppModule {}
