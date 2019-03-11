import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  editForm: FormGroup;
  @Input() userId;
  @Input() datos_personales;
  @Output() edit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log(this.datos_personales);
    console.log(this.userId);
    this.editForm = new FormGroup({
      nombre: new FormControl(this.datos_personales.nombre,[Validators.required, Validators.minLength(3),Validators.maxLength(55),Validators.pattern('^[a-zA-Z]*')]),
      apellidos: new FormControl(this.datos_personales.apellidos,[Validators.required,Validators.minLength(3),Validators.maxLength(55),Validators.pattern('^[a-zA-Z]*')]),
      fechaNacimiento: new FormControl(this.datos_personales.fechaNacimiento),
      telefono: new FormControl(this.datos_personales.telefono),
      telefono2: new FormControl(this.datos_personales.telefono2),
      dni: new FormControl(this.datos_personales.dni),
      tipoDocumento: new FormControl(this.datos_personales.tipoDocumento,/*[Validators.required]*/),/*AQUI VA VALIDACION CUSTOM PARA DNI O PASAPORTE*/
      direccion: new FormControl(this.datos_personales.direccion),
      provincia: new FormControl(this.datos_personales.provincia),
      municipio: new FormControl(this.datos_personales.municipio),
      descripcion: new FormControl(this.datos_personales.descripcion),
      competencias: new FormControl(this.datos_personales.competencias),
      carnets: new FormControl(this.datos_personales.carnets),
    });
  }

  submit(){
    console.log(this.editForm.value);
    this.edit.emit(true);
  }

}
