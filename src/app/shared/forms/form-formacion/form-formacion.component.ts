import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Formacion } from '../../models/formacion';

@Component({
  selector: 'app-form-formacion',
  templateUrl: './form-formacion.component.html',
  styleUrls: ['./form-formacion.component.scss']
})
export class FormFormacionComponent implements OnInit {
  formacionForm: FormGroup;
  universitario: boolean=false;
  ciclo: boolean=false;
  otro: boolean=false;

  formacion: Formacion;
  @Input() user;
  @Input() index;
  @Input() new;
  @Output() edit = new EventEmitter<boolean>();

  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    this.formacion=this.user.formacion_academica[this.index] || {};
    if(this.formacion.tipoTitulo=='uni'){
      this.universitario=true;
    }
    if(this.formacion.tipoTitulo=='ciclo'){
      this.ciclo=true;
    }
    console.log(this.formacion);
    console.log(this.user);
    this.formacionForm = new FormGroup({
      centro: new FormControl(this.formacion.centro),
      fecha: new FormControl(this.formacion.fecha,[Validators.pattern('^[0-9]{2}[/][0-9]{2}[/][0-9]{4}')]),
      bilingue: new FormControl(this.formacion.bilingue),
      titulo: new FormControl(this.formacion.titulo),
      familia: new FormControl(this.formacion.familia),
      grado: new FormControl(this.formacion.bilingue),
      tipoTitulo: new FormControl(this.formacion.tipoTitulo),
      ciclo: new FormControl(this.formacion.ciclo),
      dual: new FormControl(this.formacion.dual),
    });
  }

  submit(){
    console.log(this.formacionForm.value);
    if(this.new){
      console.log('nuevo');
      this.user.formacion_academica.push(this.formacionForm.value);
    }else{
      this.user.formacion_academica[this.index]=this.formacionForm.value;
      console.log('editar');
    }
    this.usersservice.updateUser(this.user).subscribe(res => {
      this.edit.emit(true);
    });
  }

  tipoTitulo(select){
    console.log(select);
    if(select=='uni'){
      this.universitario=true;
      this.ciclo=false;
      this.otro=false;
    }
    if(select=='ciclo'){
      this.universitario=false;
      this.ciclo=true;
      this.otro=false;
    }
  }
}