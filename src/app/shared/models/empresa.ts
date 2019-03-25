
export class Empresa {
    id: number;
    nombre: string;
    razonSocial: string;
    cif: string;
    direccion: string;
    municipio: string;
    provincia: string;
    url: string;
    contacto:{
        nombre: string;
        telefono: string;
        email: string;
    };
    ofertas:{
        entities:[{  
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
          }]
    }
}