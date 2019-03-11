import { InMemoryDbService } from 'angular-in-memory-web-api';
/* import { ChatDB } from './chat-db'; */

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {
        id: 1,
        datos_personales:{
          nombre: 'Antonio',
          apellidos: 'Perez Garcia',
          email: 'antonio@gmail.com',
          fechaNacimiento: '6/11/1992',
          telefono: '666333999',
          dni: '12345678D',
          descripcion: 'Soy una person responsble, trabajadora y con muchas ganas de apender',
          competencias: '',
          carnets: 'B, A1, A2',
          direccion: 'Calle, numero, piso, puerta',
          password: '1234'
        },
        formacion_academica:[
          {
          nivel:'Ciclo formativo',
          titulo:'Desarrollo en aplicaiones web',
          centro:'IES Cerdanyola',
          fecha:'10/09/2005',
          certificado:''},
          {
          nivel:'Universidad',
          titulo:'Ingeniero en informáctica',
          centro:'Universidad Oberta de Cataluña',
          fecha:'10/10/2010',
          certificado:''}
        ],
        experiencia_laboral:[
          {
            empresa:'Santander',
            puesto:'Programador junior',
            fechaInicio:'01/10/2011',
            fechaFin:'01/12/2012',
            tareas:'Desarrollo frontend'
          },
          {
            empresa:'Spotify',
            puesto:'Programador senior',
            fechaInicio:'01/01/2013',
            fechaFin:'',
            tareas:'Desarrollo backend'
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
          nombre: 'Marta',
          apellidos: 'Resines Castell',
          email: 'email@uoc.com',
          fechaNacimiento: '3/04/1994',
          telefono: '666222111',
          dni: '12344321C',
          descripcion: 'Me gusta trabajar en equipo',
          competencias: 'Se me da bien manejar el ordenador',
          carnets: 'B, A1',
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

     let empresas=[
        {
          id: '1',
          nombre: 'Movistar',
          razonSocial: 'Telecomunicaciones',
          cif: '1234AAA',
          direccion: 'calle, numero, puerta',
          municipio: 'Barcelona',
          provincia: 'Barcelona',
          url: 'www.url.com',
          contacto:{
            nombre: 'Florentino Perez',
            telefono: '600600600',
            email: 'florentino@movistar.com',
          }
        },
        {
          id: '2',
          nombre: 'FCC',
          razonSocial: 'Servicios y construcción',
          cif: '4321BBB',
          direccion: 'calle2, numero2, puerta2',
          municipio: 'Madrid',
          provincia: 'Madrid',
          url: 'www.fcc.com',
          contacto:{
            nombre: 'Bill Gates',
            telefono: '611611611',
            email: 'bill@fcc.com',
        }
      }
     ];
     return {
      users: users,
      empresas: empresas
     };
  }
}
