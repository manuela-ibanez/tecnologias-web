import { Injectable } from '@nestjs/common';
import { MascotasService } from '../mascotas/mascotas.service'; //Es para poder relacionar las mascotas con los usuarios.

@Injectable() //Indica que esta clase puede ser inyectada en otros lugares, en este caso el controlador.
export class UsuariosService {
    constructor(private readonly mascotasService: MascotasService) {} //Inyecta el servicio de mascotas para poder usarlo en este servicio.

    private usuarios = [ //Lista de usuarios, es como una base de datos temporal.
    { IDusuario: 1, nombre: 'Carlos', edad: 28, email: 'carlos@gmail.com', telefono: '123456789', IDmascota: []},
    { IDusuario: 2, nombre: 'Maria', edad: 35, email: 'maria@gmail.com', telefono: '987654321', IDmascota: [2, 1]},
    { IDusuario: 3, nombre: 'Juan', edad: 22, email: 'juan@gnmail.com', telefono: '456123789' , IDmascota: [3] },
    { IDusuario: 4, nombre: 'Ana', edad: 30, email: 'ana@gmail.com', telefono: '321654987', IDmascota: [4] },
    ];

    findAll() { //Obtiene todos los usuarios.
    return this.usuarios;
    }

    findOne(id: number) { //Busca un usuario por su id.
    return this.usuarios.find(usuario => usuario.IDusuario === id);
    }

    create(data: any) { //Crea un nuevo usuario.
    const newUsuario = { IDusuario: this.usuarios.length + 1, ...data }; //Se crea un nuevo objeto usuario con una id incremental.
    this.usuarios.push(newUsuario); //Se guarda en el array.
    return newUsuario;
    }

    update(id: number, data: any) { //Actualiza la información de un usuario.
    const index = this.usuarios.findIndex(usuario => usuario.IDusuario === id); //Se busca el id del usuario en el array.
    if (index === -1) return null; //Si no se encuentra, devuelve null.
    this.usuarios[index] = { IDusuario: id, ...data }; //Se reemplaza del usuario existente con los nuevos datos (por eso dice data al inicio, para poder ingresar los nuevos datos).
    return this.usuarios[index];
    }

    delete(id: number) { //Elimina un usuario.
    const exists = this.usuarios.some(usuarios => usuarios.IDusuario === id); //Se verifica que el usuario exista.
    this.usuarios = this.usuarios.filter(mascota => mascota.IDusuario !== id); //Se filtra el array para eliminar el usuario.
    return exists;
    }

    getMascotaDelUsuario(usuarioId: number) { //Obtiene la mascota asociada a un usuario.
    const usuario = this.usuarios.find(u => u.IDusuario === usuarioId);
    if (!usuario) { //Si no encuentra el usuario, devuelve null.
        return null;
    }

    if (!usuario.IDmascota || usuario.IDmascota.length === 0) { //Si no tiene mascota, devuelve un array vacío.
    return {
        usuario: usuario.nombre,
        mascotas: []
    };
    }

    const mascota = usuario.IDmascota
        .map((idMascota: number) => this.mascotasService.findOne(idMascota)) //Recorre cada elemento del array y devuelve un nuevo array, con los elementos transformados según la función que le pasás.
        .filter((m) => m !== undefined); // Recorre el array y mantiene solo los elementos que cumplan la condición que le pasás.
    
    return {
        usuario: usuario.nombre, //Devuelve el nombre del usuario.
        mascota: mascota.map(m => ({ nombre: m.nombre, tipo: m.tipo }))
    }
    }
};
