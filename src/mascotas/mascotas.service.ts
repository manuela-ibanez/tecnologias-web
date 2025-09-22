import { Injectable } from '@nestjs/common';

@Injectable() //Indica que esta clase puede ser inyectada en otros lugares, en este caso el controlador.
export class MascotasService {
    private mascotas = [ //Lista de mascotas, es como una base de datos temporal.
    { IDmascota: 1, nombre: 'Firulais', tipo: 'Perro', IDusuario: 2 },
    { IDmascota: 2, nombre: 'Michi', tipo: 'Gato', IDusuario: 2 },
    { IDmascota: 3, nombre: 'Nemo', tipo: 'Pez', IDusuario: 3 },
    { IDmascota: 4, nombre: 'Torty', tipo: 'Tortuga', IDusuario: 4 },
    ];

    findAll() { //Obtiene todas las mascotas.
    return this.mascotas;
    }

    findOne(id: number) { //Busca una mascota por su id.
    return this.mascotas.find(mascota => mascota.IDmascota === id);
    }

    create(data: any) { //Crea una nueva mascota.
    const newMascota = { id: this.mascotas.length + 1, ...data }; //Se crea un nuevo objeto mascota con una id incremental.
    this.mascotas.push(newMascota); //Se guarda en el array.
    return newMascota;
    }

    update(id: number, data: any) { //Actualiza una mascota.
    const index = this.mascotas.findIndex(mascota => mascota.IDmascota === id); //Se busca el id de la mascota en el array.
    if (index === -1) return null; //Si no se encuentra, devuelve null.
    this.mascotas[index] = { id, ...data }; //Se reemplaza la mascota existente con los nuevos datos (por eso dice data al inicio, para poder ingresar los nuevos datos).
    return this.mascotas[index];
    }

    delete(id: number) { //Elimina una mascota.
    const exists = this.mascotas.some(mascota => mascota.IDmascota === id); //Se verifica que la mascota exista.
    this.mascotas = this.mascotas.filter(mascota => mascota.IDmascota !== id); //Se filtra el array para eliminar la mascota.
    return exists;
    }
}
