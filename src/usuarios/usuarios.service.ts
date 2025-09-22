import { Injectable } from '@nestjs/common';

@Injectable() //Indica que esta clase puede ser inyectada en otros lugares, en este caso el controlador.
export class UsuariosService {
    private usuarios = [ //Lista de usuarios, es como una base de datos temporal.
    { id: 1, nombre: 'Carlos', edad: 28, email: 'carlos@gmail.com', telefono: '123456789' },
    { id: 2, nombre: 'Maria', edad: 35, email: 'maria@gmail.com', telefono: '987654321' },
    { id: 3, nombre: 'Juan', edad: 22, email: 'juan@gnmail.com', telefono: '456123789' },
    { id: 4, nombre: 'Ana', edad: 30, email: 'ana@gmail.com', telefono: '321654987' },
    ];

    findAll() { //Obtiene todos los usuarios.
    return this.usuarios;
    }

    findOne(id: number) { //Busca un usuario por su id.
    return this.usuarios.find(mascota => mascota.id === id);
    }

    create(data: any) { //Crea un nuevo usuario.
    const newUsuario = { id: this.usuarios.length + 1, ...data }; //Se crea un nuevo objeto usuario con una id incremental.
    this.usuarios.push(newUsuario); //Se guarda en el array.
    return newUsuario;
    }

    update(id: number, data: any) { //Actualiza la información de un usuario.
    const index = this.usuarios.findIndex(usuarios => usuarios.id === id); //Se busca el id del usuario en el array.
    if (index === -1) return null; //Si no se encuentra, devuelve null.
    this.usuarios[index] = { id, ...data }; //Se reemplaza del usuario existente con los nuevos datos (por eso dice data al inicio, para poder ingresar los nuevos datos).
    return this.usuarios[index];
    }

    delete(id: number) { //Elimina un usuario.
    const exists = this.usuarios.some(usuarios => usuarios.id === id); //Se verifica que el usuario exista.
    this.usuarios = this.usuarios.filter(mascota => mascota.id !== id); //Se filtra el array para eliminar el usuario.
    return exists;
    }
}

