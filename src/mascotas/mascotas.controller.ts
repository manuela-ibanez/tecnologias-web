import { Controller, Get } from '@nestjs/common';

@Controller('mascotas')
export class MascotasController {

    @Get()
    getMascotas() {
        return [
            { id: 1, nombre: 'Firulais', tipo: 'Perro', usuarioId: 1 },
            { id: 2, nombre: 'Michi', tipo: 'Gato', usuarioId: 2 },
        ];
    }
}
