import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  @Input() userId;
  @Input() formacion;
  @Output() edit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    this.ciclo=false;
    this.otro=false;
    this.universitario=true;
    console.log(this.formacion);
    this.formacionForm = new FormGroup({
      titulo: new FormControl(this.formacion.titulo,[Validators.required, Validators.minLength(3),Validators.maxLength(255),/*Validators.pattern('^[a-zA-Z]*')*/]),
      tipoTitulo: new FormControl(this.formacion.tipoTitulo),
      centroUniversitario: new FormControl(this.formacion.centroUniversitario),
      fechaUniversidad: new FormControl(this.formacion.fecha),
      bilingue: new FormControl(this.formacion.bilingue),
      centroEducativo: new FormControl(this.formacion.centroEducativo),
      familia: new FormControl(this.formacion.familia),
      grado: new FormControl(this.formacion.bilingue),
      ciclo: new FormControl(this.formacion.centroEducativo),
      fechaCiclo: new FormControl(this.formacion.familia),
      dual: new FormControl(this.formacion.dual),
      cicloBilingue: new FormControl(this.formacion.cicloBilingue),
    });
  }

  submit(){
    console.log(this.formacionForm.value);
    this.edit.emit(true);
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