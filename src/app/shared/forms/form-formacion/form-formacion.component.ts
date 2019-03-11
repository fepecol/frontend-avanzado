import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-formacion',
  templateUrl: './form-formacion.component.html',
  styleUrls: ['./form-formacion.component.scss']
})
export class FormFormacionComponent implements OnInit {
  formacionForm: FormGroup;
  @Input() userId;
  @Input() formacion;
  @Output() edit = new EventEmitter<boolean>();

  cities = [
    {id: 1, name: 'Vilnius'},
    {id: 2, name: 'Kaunas'},
    {id: 3, name: 'Pavilnys', disabled: true},
    {id: 4, name: 'Pabradė'},
    {id: 5, name: 'Klaipėda'}
];

  constructor() { }

  ngOnInit() {console.log(this.formacion);
    this.formacionForm = new FormGroup({
      titulo: new FormControl(this.formacion.titulo,[Validators.required, Validators.minLength(3),Validators.maxLength(255),/*Validators.pattern('^[a-zA-Z]*')*/]),
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

  universidad(){
    console.log('selected');
  }
}