import { Module } from '@nestjs/common';
import { MascotasController } from './mascotas.controller';
import { MascotasService } from './mascotas.service';

@Module({
    controllers: [MascotasController],
    providers: [MascotasService],
    exports: [MascotasService], // Exporta el servicio para que pueda ser usado en otros módulos.
})
export class MascotasModule {}