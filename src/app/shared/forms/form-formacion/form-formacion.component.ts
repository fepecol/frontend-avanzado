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
  universitario: boolean;
  ciclo: boolean;
  otro: boolean;

  formacion: Formacion;
  @Input() user;
  @Input() index;
  @Input() new;
  @Output() edit = new EventEmitter<boolean>();

  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    this.ciclo=false;
    this.otro=false;
    this.universitario=true;
    this.formacion=this.user.formacion_academica[this.index] || {};
    console.log(this.formacion);
    console.log(this.user);
    this.formacionForm = new FormGroup({
      titulo: new FormControl(this.formacion.titulo),
      tipoTitulo: new FormControl(this.formacion.tipoTitulo),
      centroUniversitario: new FormControl(this.formacion.centro),
      fechaUniversidad: new FormControl(this.formacion.fecha,[Validators.pattern('^[0-9]{2}[/][0-9]{2}[/][0-9]{4}')]),
      bilingue: new FormControl(this.formacion.bilingue),
      centroEducativo: new FormControl(this.formacion.centro),
      familia: new FormControl(this.formacion.familia),
      grado: new FormControl(this.formacion.bilingue),
      ciclo: new FormControl(this.formacion.centroEducativo),
      fechaCiclo: new FormControl(this.formacion.familia,[Validators.pattern('^[0-9]{2}[/][0-9]{2}[/][0-9]{4}')]),
      dual: new FormControl(this.formacion.dual),
      cicloBilingue: new FormControl(this.formacion.cicloBilingue),
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