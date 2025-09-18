import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './usuarios/usuarios.controller';
import { AutentificacionController } from './autentificacion/autentificacion.controller';
import { MascotasController } from './mascotas/mascotas.controller';
import { ServiciosController } from './servicios/servicios.controller';
import { TurnosController } from './turnos/turnos.controller';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [],
  controllers: [AppController,
                UsuariosController, 
                AutentificacionController, 
                MascotasController, 
                ServiciosController, 
                TurnosController, 
                AdminController],
  providers: [AppService],
})
export class AppModule {}
