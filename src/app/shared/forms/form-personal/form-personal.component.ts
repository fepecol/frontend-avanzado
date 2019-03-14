import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    this.datos_personales=this.user.datos_personales;
    this.editForm = new FormGroup({
      nombre: new FormControl(this.datos_personales.nombre,[Validators.required, Validators.minLength(3),Validators.maxLength(55),Validators.pattern('^[a-zA-Z]*')]),
      apellidos: new FormControl(this.datos_personales.apellidos,[Validators.required,Validators.minLength(3),Validators.maxLength(55),Validators.pattern('^[a-zA-Z]*[ ][a-zA-Z]*')]),
      fechaNacimiento: new FormControl(this.datos_personales.fechaNacimiento,[Validators.pattern('^[0-9]{2}[/][0-9]{2}[/][0-9]{4}')]),
      telefono: new FormControl(this.datos_personales.telefono),
      telefono2: new FormControl(this.datos_personales.telefono2),
      dni: new FormControl(this.datos_personales.dni),
      tipoDocumento: new FormControl(this.datos_personales.tipoDocumento),/*AQUI VA VALIDACION CUSTOM PARA DNI O PASAPORTE*/
      direccion: new FormControl(this.datos_personales.direccion),
      provincia: new FormControl(this.datos_personales.provincia),
      municipio: new FormControl(this.datos_personales.municipio),
      descripcion: new FormControl(this.datos_personales.descripcion),
      competencias: new FormControl(this.datos_personales.competencias),
      carnets: new FormControl(this.datos_personales.carnets),
      email: new FormControl(this.datos_personales.email),
    });
  }

  submit(){
    console.log(this.editForm.value);
    this.user.datos_personales=this.editForm.value;
    this.usersservice.updateUser(this.user).subscribe(res => {
      this.edit.emit(true);
    });
  }

}
