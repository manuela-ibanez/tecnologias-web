import { Controller } from '@nestjs/common';

@Controller('clientes')
export class ClientesController {}

@Get ('/clientes')
getclientes(): any {
    return "Lista de clientes";
}

@Get ('/raza')
getraza(): any {
    return "Lista de razas";
}