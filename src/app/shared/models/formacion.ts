
enum nivelAcademico {
    ciclo = "Ciclo Formativo",
    Universidad = "Universidad"
  }

export class Formacion {
    nivel: nivelAcademico;
    titulo: string;
    centro: string;
    fecha: string;
    certificado: string;
    /* */
    tipoTitulo: string;
    centroUniversitario: string;
    fechaUniversidad: string;
    bilingue: string;
    centroEducativo: string;
    familia: string;
    grado: string;
    ciclo: string;
    fechaCiclo: string;
    dual: string;
    cicloBilingue: string;
}