enum nivelAcademico {
  ciclo = "Ciclo Formativo",
  Universidad = "Universidad"
}

enum tipoDocumento {
  dni = "NIF/NIE",
  otro = "Otro",
  pasaporte = "Pasaporte"
}

export class User {
  id: number;
  datos_personales: {
    nombre: string;
    apellidos: string;
    email: string;
    fechaNacimiento: string;
    telefono: string;
    telefono2: string;
    tipoDocumento: string;
    numeroDocumento: string;
    descripcion: string;
    competencias: string;
    carnets: string;
    password: string;
    direccion: string;
    municipio: string;
    provincia: string;
  };
  formacion_academica: {
    centro: string;
    fecha: string;
    bilingue: string;
    certificado: string;
    titulo: string;
    familia: string;
    grado: string;
    ciclo: string;
    dual: string;
    tipoTitulo: string;
  };
  experiencia_laboral:{
    entities:[{  
      empresa: string;
      puesto: string;
      fechaInicio: string;
      fechaFin: string;
      tareas: string;
    }]
  };
  idiomas: [{
    nivel:string;
    idioma:string;
    fecha:string;
    }
  ];
  offers:{
    entities:[
      {
        id: number;
        puesto: string;
        descripcion: string;
        empresa: string;
        familia: string;
        fecha: string;
        provincia: string;
        municipio: string;
        titulos: string;
        estado: string;
      }
    ]
  }
  
}