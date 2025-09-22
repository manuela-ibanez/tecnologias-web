import { Controller, Delete, Get, Post, Body, Put, Param } from '@nestjs/common';
import { MascotasService } from './mascotas.service';

@Controller('mascotas')
export class MascotasController {
    constructor(private readonly mascotasService: MascotasService) {} //Conecta al controlador con el servicio.

    @Get() //Listar todas.
    findAll(): any[] {
        console.log("Obteniendo todas las mascotas");
        return this.mascotasService.findAll(); //Llama al servicio para obtener todas las mascotas.
    }

    @Get(':id') //Buscar por una id.
    findOne(@Param('id') id: string){ //Se usa string porque viene de la URL.
        console.log("Buscando mascota con ID:", id);
        return this.mascotasService.findOne(Number(id)); //Busca en el array la mascota que tenga ese id.
    }

    @Delete(':id') //Eliminar mascota con ese id.
    delete(@Param('id') id: string){ //Se usa string porque viene de la URL.
        console.log("Eliminando mascota con id:", id);
        const deleted = this.mascotasService.delete(Number(id));
        if (!deleted) { //Si no se encuentra, devuelve "Mascota no encontrada".
            return { message: 'Mascota no encontrada' };
        }
    }

    @Post() //Crea una nueva mascota, busca una mascota por id y reemplaza sus datos.
    create(@Body() createMascotaDto: any) {
        console.log("Creando nueva mascota:", createMascotaDto);
        return this.mascotasService.create(createMascotaDto);
    }

    @Put(':id') //Actualiza una mascota por id.
    update(@Param('id') id: string, @Body() updateMascotaDto: any) {
        console.log("Actualizando mascota con id:", id, "con datos:", updateMascotaDto);
        const update = this.mascotasService.update(Number(id), updateMascotaDto);
        if (!update) { //Si no se encuentra, devuelve "Mascota no encontrada".
            return { message: 'Mascota no encontrada' };
        }   
    }
}


