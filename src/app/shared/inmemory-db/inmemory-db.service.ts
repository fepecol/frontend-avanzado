import { InMemoryDbService } from 'angular-in-memory-web-api';
/* import { ChatDB } from './chat-db'; */

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {
        id: 1,
        nombre: 'Félix',
        apellidos: 'Pérez Collado',
        email: 'felix_9669@hotmail.com',
        fechaNacimiento: '6/11/1992',
        telefono: '666333999',
        dni: '12345678D',
        descripcion: 'Soy una person responsble, trabajadora y con muchas ganas de apender',
        carnets: 'Tengo el carne de coche y moto',
        direccion: 'Calle, numero, piso, puerta',
        password: '1234'
      },
      {
        id: 2,
        nombre: 'Sandra',
        apellidos: 'Tortajada Trullenque',
        email: 'email@uoc.com',
        fechaNacimiento: '3/04/1994',
        telefono: '666222111',
        dni: '12344321C',
        descripcion: 'Me gusta trabajar en equipo',
        carnets: 'Tengo el carne de coche',
        direccion: 'Calle, numero, piso, puerta',
        password: '4321'
      }
     ];
     return {
      users: users
     };
  }
}
