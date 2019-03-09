enum nivelAcademico {
    ciclo = "Ciclo Formativo",
    Universidad = "Universidad"
  }

  export class User {
    id: number;
    datos_personales: {
      nombre: string;
      apellidos: string;
      email: string;
      fechaNacimiento: string;
      telefono: string;
      dni: string;
      descripcion: string;
      competencias: string;
      carnets: string;
      direccion: string;
      password: string;
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