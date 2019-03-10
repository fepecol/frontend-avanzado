import { InMemoryDbService } from 'angular-in-memory-web-api';
/* import { ChatDB } from './chat-db'; */

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {
        id: 1,
        datos_personales:{
          nombre: 'Félix',
          apellidos: 'Pérez Collado',
          email: 'felix_9669@hotmail.com',
          fechaNacimiento: '6/11/1992',
          telefono: '666333999',
          dni: '12345678D',
          descripcion: 'Soy una person responsble, trabajadora y con muchas ganas de apender',
          competencias: '',
          carnets: 'Tengo el carne de coche y moto',
          direccion: 'Calle, numero, piso, puerta',
          password: '1234'
        },
        formacion_academica:[
          {
          nivel:'Ciclo formativo',
          título:'Desarrollo en aplicaiones web',
          centro:'IES Cerdanyola',
          fecha:'10/09/2005',
          certificado:''},
          {
            nivel:'Universidad',
            título:'Ingeniero en informáctica',
            centro:'Universidad Oberta de Cataluña',
            fecha:'10/10/2010',
            certificado:''}
        ],
        experiencia_laboral:[
          {
          empresa:'Santander',
          puesto:'Programador junior',
          fechas:'01/10/2011-01/12/2012'
          },
          {
            empresa:'Spotify',
            puesto:'Programador senior',
            fechas:'01/01/2013'
            }
        ],
        idiomas:[
          {
            nivel:'C2',
            idioma:'Español',
            fecha:''
          },
          {
            nivel:'B1',
            idioma:'Inglés',
            fecha:'01/01/2013-'
          }
        ]
      },
      {
        id: 2,
        datos_personales:{
          nombre: 'Sandra',
          apellidos: 'Tortajada Trullenque',
          email: 'email@uoc.com',
          fechaNacimiento: '3/04/1994',
          telefono: '666222111',
          dni: '12344321C',
          descripcion: 'Me gusta trabajar en equipo',
          competencias: 'Se me da bien manejar el ordenador',
          carnets: 'Tengo el carne de coche',
          direccion: 'Calle, numero, piso, puerta',
          password: '4321'
        },
        formacion_academica:[
          {
          nivel:'Ciclo formativo',
          título:'Marqueting digital',
          centro:'IES Cerdanyola',
          fecha:'10/09/2009',
          certificado:''},
          {
            nivel:'Universidad',
            título:'Publicidad y marqueting',
            centro:'Universidad Autonoma de Barcelona',
            fecha:'10/10/2014',
            certificado:''}
        ],
        experiencia_laboral:[
          {
          empresa:'BBVA',
          puesto:'Asistente de marqueting',
          fechas:'01/10/2014-01/12/2016'
          },
          {
            empresa:'Spotify',
            puesto:'Marqueting manager',
            fechas:'01/01/2017'
            }
        ],
        idiomas:[
          {
            nivel:'C2',
            idioma:'Español',
            fecha:''
          },
          {
            nivel:'C1',
            idioma:'Inglés',
            fecha:'01/01/2013-'
          }
        ]
      }
     ];
     return {
      users: users
     };
  }
}
