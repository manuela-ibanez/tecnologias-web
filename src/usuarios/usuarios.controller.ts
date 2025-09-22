import { Controller, Delete, Get, Post, Body, Put, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly UsuariosService: UsuariosService) {} //Conecta al controlador con el servicio.

    @Get() //Lista todos los usuarios.
    findAll(): any[] {
        console.log("Obteniendo todos los usuarios");
        return this.UsuariosService.findAll(); //Llama al servicio para obtener todas las mascotas.
    }

    @Get(':id') //Buscar por una id.
    findOne(@Param('id') id: string){ //Se usa string porque viene de la URL.
        console.log("Buscando usuario con ID:", id);
        return this.UsuariosService.findOne(Number(id)); //Busca en el array la mascota que tenga ese id.
    }

    @Delete(':id') //Elimina el usuario con ese id.
    delete(@Param('id') id: string){ //Se usa string porque viene de la URL.
        console.log("Eliminando usuario con id:", id);
        const deleted = this.UsuariosService.delete(Number(id));
        if (!deleted) { //Si no se encuentra, devuelve "Usuario no encontrado".
            return { message: 'Usuario no encontrado' };
        }
    }

    @Post() //Crea un nuevo usuario, busca un usuario por id y reemplaza sus datos.
    create(@Body() createUsuariosDto: any) {
        console.log("Creando nuevo usuario:", createUsuariosDto);
        return this.UsuariosService.create(createUsuariosDto);
    }

    @Put(':id') //Actualiza un usuario por id.
    update(@Param('id') id: string, @Body() updateUsauriosDto: any) {
        console.log("Actualizando usuario con id:", id, "con datos:", updateUsauriosDto);
        const update = this.UsuariosService.update(Number(id), updateUsauriosDto);
        if (!update) { //Si no se encuentra, devuelve "Usuario no encontrado".
            return { message: 'Usuario no encontrado' };
        }   
    }
}