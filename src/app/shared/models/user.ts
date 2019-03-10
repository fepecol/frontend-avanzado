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
    dni: string;
    descripcion: string;
    competencias: string;
    carnets: string;
    password: string;
    tipoDocumento: tipoDocumento;
    direccion: string;
    municipio: string;
    provincia: string;
  };
  formacion_academica: {
    nivel: nivelAcademico;
    titulo: string;
    centro: string;
    fecha: string;
    certificado: string;
  };
  experiencia_laboral: {
    empresa: string;
    puesto: string;
    fechas: string;
  };
  idiomas: [{
    'nivel': string,
    }
  ];
  
  idioma: string;
}