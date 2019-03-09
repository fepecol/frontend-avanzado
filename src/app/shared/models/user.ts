enum Genders {
    male = "male",
    female = "female"
  }
  
  // export class User {
  //   id: string | number;
  //   index: number;
  //   guid: string;
  //   isActive: boolean = false;
  //   picture: string;
  //   age: number;
  //   name: string;
  //   gender: Genders;
  //   company: string;
  //   email: string;
  //   phone: string;
  // }

  export class User {
    id: number;
    nombre: string;
    apellidos: string;
    email: string;
    fechaNacimiento: string;
    telefono: string;
    dni: string;
    descripcion: string;
    carnets: string;
    direccion: string;
  }