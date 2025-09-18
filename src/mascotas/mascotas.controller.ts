import { Controller, Delete, Get, Post, Body, Put, Param } from '@nestjs/common';

@Controller('mascotas')
export class MascotasController {
    mascotas = [
        { id: 1, nombre: 'Firulais', tipo: 'Perro'},
        { id: 2, nombre: 'Michi', tipo: 'Gato'},
        { id: 3, nombre: 'Nemo', tipo: 'Pez'},
        { id: 4, nombre: 'Torty', tipo: 'Tortuga'},
    ];

    @Get()
    findAll(): any[] {
        console.log("Obteniendo todas las mascotas");
        return this.mascotas;
    }

    @Delete(':id')
    deleteMascota(@Param('id') id: number): any {
        console.log("Eliminando mascota con id:", id);
        this.mascotas = this.mascotas.filter(mascota => mascota.id !== id);
        return {
            id: id,
            name: 'Mascota eliminada exitosamente',
            description: `Descripcion de la mascota ${id}`,
        };
    }

    @Get(':id')
    findOne(@Param('id') id: number): any {
        console.log("Buscando mascota con id:", id);
        return this.mascotas.find((mascota) => mascota.id === Number (id));
    }

    @Post()
    create(@Body() createMascotaDto: any) {
        console.log("Creando nueva mascota:", createMascotaDto);
        const newMascota = {
            id: this.mascotas.length + 1,
            ...createMascotaDto
        };
        this.mascotas.push(newMascota);
        return newMascota;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateMascotaDto: any) {
        console.log("Actualizando mascota con id:", id, "con datos:", updateMascotaDto);
        const mascotaIndex = this.mascotas.findIndex(mascota => mascota.id === parseInt(id));
        if (mascotaIndex === -1) {
            return { message: 'Mascota no encontrada' };
        }
        this.mascotas[mascotaIndex] = { id: parseInt(id), ...updateMascotaDto };
        return this.mascotas[mascotaIndex];
    }
}


