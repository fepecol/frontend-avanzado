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
          email: 'admin@uoc.com',
          fechaNacimiento: '06/11/1992',
          telefono: '666333999',
          tipoDocumento: 'dni',
          numeroDocumento: '12345678Z',
          descripcion: 'Soy una person responsble, trabajadora y con muchas ganas de apender',
          competencias: '',
          carnets: 'B, A1, A2',
          direccion: 'Calle, numero, piso, puerta',
          provincia:'Valencia',
          municipio:'Valencia',
          password: '1234'
        },
        formacion_academica:[
          {
            centro: 'IES Cerdanyola',
            fecha: '10/09/2005',
            bilingue: 'true',
            certificado: 'true',
            titulo: 'Desarrollo en aplicaiones web',
            familia: 'Web',
            grado: 'Grado superior',
            ciclo: '',
            dual: 'false',
            tipoTitulo: 'ciclo',
          },
          {
            centro: 'Universidad Oberta de Cataluña',
            fecha: '10/10/2010',
            bilingue: 'true',
            certificado: 'false',
            titulo: 'Ingeniero en informáctica',
            familia: '',
            grado: '',
            ciclo: '',
            dual: '',
            tipoTitulo: 'uni',
          } 
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
        ],
        offers:{
          entities: [
            {
              puesto: 'Professor Extraescolars programació i robòtica educativa',
              empresa: 'Eixos Creativa',
              familia: 'Informática y Comunicaciones',
              fecha: '30/01/2019',
              provincia: 'Barcelona',
              estado: 'Sigues en el proceso'
            },
            {
              puesto: 'Programaador Jr Java',
              empresa: 'Ki - Works',
              familia: 'Informática y Comunicaciones',
              fecha: '28/01/2019',
              provincia: 'Tarragona',
              estado: 'Proceso abierto'
            }
          ]
        }
      },
      {
        id: 2,
        datos_personales:{
          nombre: 'Marta',
          apellidos: 'Resines Castell',
          email: 'email@uoc.com',
          fechaNacimiento: '03/04/1994',
          telefono: '666222111',
          tipoDocumento: 'dni',
          numeroDocumento: '97812149A',
          descripcion: 'Me gusta trabajar en equipo',
          competencias: 'Se me da bien manejar el ordenador',
          carnets: 'B, A1',
          direccion: 'Calle, numero, piso, puerta',
          provincia:'Barcelona',
          municipio:'Barcelona',
          password: '4321'
        },
        formacion_academica:[
          {
            centro: 'IES Cerdanyola',
            fecha: '10/09/2009',
            bilingue: 'true',
            certificado: 'false',
            titulo: 'Marqueting digital',
            familia: 'Empresas',
            grado: 'Grado superior',
            ciclo: '',
            dual: 'false',
            tipoTitulo: 'ciclo',
          },
          {
            centro: 'Universidad Autonoma de Barcelona',
            fecha:'10/10/2014',
            bilingue: 'true',
            certificado: 'true',
            titulo: 'Publicidad y marqueting',
            familia: 'Empresas',
            grado: '',
            ciclo: '',
            dual: 'false',
            tipoTitulo: 'uni',
          }
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
          },
          ofertas:{
            entities:[{  
                offerId: '3',
                puesto: 'Professor Extraescolars programació i robòtica educativa',
                descripcion: 'Se busca a alguien con pasion por la enseñanza',
                empresa: 'Movistar',
                familia: 'Informática y Comunicaciones',
                fecha: '30/01/2019',
                provincia: 'Barcelona',
                municipio: 'Terrassa',
                titulos: '',
                estado: 'abierta',
              },{
                offerId: '1',
                puesto: 'Programador junior',
                descripcion: 'Buscamos un perfil sin experiencia para crecer',
                empresa: 'Computing SL',
                familia: 'Programación web',
                fecha: '01/05/2019',
                provincia: 'Barcelona',
                municipio: 'Barcelona',
                titulos: 'Grado en ingenieria informatica',
              }
            ]
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
          },
          ofertas:{
            entities:[{
              offerId: '4',
              puesto: 'Administrativa',
              empresa: 'Servium',
              familia: 'Administración y Gestión',
              fecha: '25/01/2019',
              descripcion: 'Persona para trabajar en oficina',
              provincia: 'Barcelona',
              municipio: 'Sant Cugat',
              titulos: '',
              estado: 'abierta',
              }
            ]
          }
        }
     ];

     let offers=[
        {
          id: '1',
          puesto: 'Programador junior',
          descripcion: 'Buscamos un perfil sin experiencia para crecer',
          empresa: 'Computing SL',
          familia: 'Programación web',
          fecha: '01/05/2019',
          provincia: 'Barcelona',
          municipio: 'Barcelona',
          titulos: 'Grado en ingenieria informatica',
        },
        {
          id: '2',
          puesto: 'Asistente de marqueting',
          descripcion: 'Puesto de ayudante en marqueting',
          empresa: 'Publicidad SL',
          familia: 'Publicidad y marqueting',
          fecha: '01/04/2019',
          provincia: 'Barcelona',
          municipio: 'Sabadell',
          titulos: 'Grado en marqueting',
        },
        {
          id: '3',
          puesto: 'Professor Extraescolars programació i robòtica educativa',
          descripcion: 'Se busca a alguien con pasion por la enseñanza',
          empresa: 'Movistar',
          familia: 'Informática y Comunicaciones',
          fecha: '30/01/2019',
          provincia: 'Barcelona',
          municipio: 'Terrassa',
          titulos: '',
          estado: 'abierta',
        },{
          id: '4',
          puesto: 'Administrativa',
          empresa: 'Servium',
          familia: 'Administración y Gestión',
          fecha: '25/01/2019',
          descripcion: 'Persona para trabajar en oficina',
          provincia: 'Barcelona',
          municipio: 'Sant Cugat',
          titulos: '',
          estado: 'abierta',
        }
    ];

     return {
      users: users,
      empresas: empresas,
      offers: offers
     };
  }
}
