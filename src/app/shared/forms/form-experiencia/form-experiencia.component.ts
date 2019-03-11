import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.scss']
})
export class FormExperienciaComponent implements OnInit {
  experienciaForm: FormGroup;
  @Input() userId;
  @Input() experiencia;
  @Output() edit = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
    console.log(this.experiencia);
    this.experienciaForm = new FormGroup({
      empresa: new FormControl(this.experiencia.empresa,[Validators.required, Validators.minLength(3),Validators.maxLength(255),Validators.pattern('^[a-zA-Z]*')]),
      fechaInicio: new FormControl(this.experiencia.fechaInicio),
      fechaFin: new FormControl(this.experiencia.fechaFin),
      puesto: new FormControl(this.experiencia.puesto, [Validators.minLength(3),Validators.maxLength(255),Validators.pattern('^[a-zA-Z ]*')]),
      tareas: new FormControl(this.experiencia.tareas),
    });
  }

  submit(){
    console.log(this.experienciaForm.value);
    this.edit.emit(true);
  }

}
