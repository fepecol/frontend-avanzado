import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  editForm: FormGroup;
  @Input() datos_personales;
  @Input() edit_datospersonales;
  constructor(private _route: Router) { }

  ngOnInit() {
    console.log(this.datos_personales);
    this.editForm = new FormGroup({
      nombre: new FormControl(this.datos_personales.nombre,[Validators.required, Validators.minLength(3),Validators.maxLength(55)/*,Validators.pattern('[a-zA-Z ]*')*/]),
    apellidos: new FormControl(this.datos_personales.apellidos,[Validators.required,Validators.minLength(3),Validators.maxLength(55)/*,Validators.pattern('[a-zA-Z ]*')*/]),
      // fechaNacimiento: new FormControl(this.datos_personales.fechaNacimiento,[Validators.required]),
      // telefono: new FormControl(this.datos_personales.telefono,[Validators.required]),
      // telefono2: new FormControl(this.datos_personales.telefono2),
      // dni: new FormControl(this.datos_personales.dni,[Validators.required]),
      // tipoDocumento: new FormControl(this.datos_personales.tipoDocumento,[Validators.required]),
      // direccion: new FormControl(this.datos_personales.direccion,[Validators.required]),
      // provincia: new FormControl(this.datos_personales.provincia,[Validators.required]),
      // municipio: new FormControl(this.datos_personales.municipio,[Validators.required]),
      // descripcion: new FormControl(this.datos_personales.descripcion,[Validators.required]),
      // competencias: new FormControl(this.datos_personales.competencias,[Validators.required]),
      // carnets: new FormControl(this.datos_personales.carnets,[Validators.required]),
    });
  }

  submit(){
    this.edit_datospersonales=false;
    let userId=1;
    this._route.navigate(['/admin/profile'],{queryParams: {userId} });
  }

}
