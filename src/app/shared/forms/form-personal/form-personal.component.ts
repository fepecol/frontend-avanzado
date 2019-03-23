import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { User } from '../../models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-form-personal',
  templateUrl: './form-personal.component.html',
  styleUrls: ['./form-personal.component.scss']
})
export class FormPersonalComponent implements OnInit {
  editForm: FormGroup;
  datos_personales: User["datos_personales"];
  @Input() user;
  @Output() edit = new EventEmitter<boolean>();

  provincias=[{id: 0, provincia: "A Coruña"},{id: 1, provincia: "Álava"},{id: 2, provincia: "Albacete"},{id: 3, provincia: "Alicante"},{id: 4, provincia: "Almería"},{id: 5, provincia: "Asturias"},{id: 6, provincia: "Ávila"},{id: 7, provincia: "Badajoz"},{id: 8, provincia: "Baleares"},{id: 9, provincia: "Barcelona"},{id: 10, provincia: "Burgos"},{id: 11, provincia: "Cáceres"},{id: 12, provincia: "Cádiz"},{id: 13, provincia: "Cantabria"},{id: 14, provincia: "Castellón"},{id: 15, provincia: "Ciudad Real"},{id: 16, provincia: "Córdoba"},{id: 17, provincia: "Cuenca"},{id: 18, provincia: "Girona"},{id: 19, provincia: "Granada"},{id: 20, provincia: "Guadalajara"},{id: 21, provincia: "Gipuzkoa"},{id: 22, provincia: "Huelva"},{id: 23, provincia: "Huesca"},{id: 24, provincia: "Jaén"},{id: 25, provincia: "La Rioja"},{id: 26, provincia: "Las Palmas"},{id: 27, provincia: "León"},{id: 28, provincia: "Lérida"},{id: 29, provincia: "Lugo"},{id: 30, provincia: "Madrid"},{id: 31, provincia: "Málaga"},{id: 32, provincia: "Murcia"},{id: 33, provincia: "Navarra"},{id: 34, provincia: "Ourense"},{id: 35, provincia: "Palencia"},{id: 36, provincia: "Pontevedra"},{id: 37, provincia: "Salamanca"},{id: 38, provincia: "Segovia"},{id: 39, provincia: "Sevilla"},{id: 40, provincia: "Soria"},{id: 41, provincia: "Tarragona"},{id: 42, provincia: "Santa Cruz de Tenerife"},{id: 43, provincia: "Teruel"},{id: 44, provincia: "Toledo"},{id: 45, provincia: "Valencia"},{id: 46, provincia: "Valladolid"},{id: 47, provincia: "Vizcaya"},{id: 48, provincia: "Zamora"},{id: 49, provincia: "Zaragoza"}];

  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    this.datos_personales=this.user.datos_personales;
    this.editForm = new FormGroup({
      nombre: new FormControl(this.datos_personales.nombre,[Validators.required, Validators.minLength(3),Validators.maxLength(55),Validators.pattern('^[a-zA-Z]*')]),
      apellidos: new FormControl(this.datos_personales.apellidos,[Validators.required,Validators.minLength(3),Validators.maxLength(55),Validators.pattern('^[a-zA-Z]*[ ][a-zA-Z]*')]),
      fechaNacimiento: new FormControl(this.datos_personales.fechaNacimiento,[Validators.pattern('^[0-9]{2}[/][0-9]{2}[/][0-9]{4}')]),
      telefono: new FormControl(this.datos_personales.telefono),
      telefono2: new FormControl(this.datos_personales.telefono2),
      numeroDocumento: new FormControl(this.datos_personales.numeroDocumento,[this.dniValidator]),
      tipoDocumento: new FormControl(this.datos_personales.tipoDocumento),
      direccion: new FormControl(this.datos_personales.direccion),
      provincia: new FormControl(this.datos_personales.provincia),
      municipio: new FormControl(this.datos_personales.municipio),
      descripcion: new FormControl(this.datos_personales.descripcion),
      competencias: new FormControl(this.datos_personales.competencias),
      carnets: new FormControl(this.datos_personales.carnets),
      email: new FormControl(this.datos_personales.email),
      provincias: new FormArray([]),
    });
    this.addProvincias();
  }

  submit(){
    console.log(this.editForm.value);
    this.user.datos_personales=this.editForm.value;
    this.usersservice.updateUser(this.user).subscribe(res => {
      this.edit.emit(true);
    });
  }

  dniValidator(control: FormControl){
    let documento=control.value;
    if(documento){
      let validDocument=false;

      /*comprobar dni*/
      let numero, letr, letra, expresion_regular_dni, expresion_regular_pasaporte;
    
      expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
      expresion_regular_pasaporte = /^[a-z]{3}[0-9]{6}[a-z]?$/;
    
      if(expresion_regular_dni.test (documento) == true){
        numero = documento.substr(0,documento.length-1);
        letr = documento.substr(documento.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substring(numero,numero+1);
        if (letra!=letr.toUpperCase()) {
          console.log('Dni erroneo, la letra del NIF no se corresponde');
        }else{
          validDocument=true;
          console.log('Dni correcto');
        }
      }
      /*validar pasaporte */
      if(expresion_regular_pasaporte.test (documento) == true){
        validDocument=true;
      }
      /*comprobar dni*/
      if(!validDocument){
        //si dni incorrecto devuelvo un objeto
        return {
          numeroDocument: {
            parsedDocument: document
          }
        }
      }
    }
    //si dni correcto devuelvo null
    return null;
  }

  private addProvincias() {
    this.provincias.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.editForm.controls.provincias as FormArray).push(control);
    });
  }

}
