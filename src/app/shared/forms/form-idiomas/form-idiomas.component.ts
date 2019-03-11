import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgSelectModule, NgOption} from '@ng-select/ng-select';

@Component({
  selector: 'app-form-idiomas',
  templateUrl: './form-idiomas.component.html',
  styleUrls: ['./form-idiomas.component.scss']
})
export class FormIdiomasComponent implements OnInit {

  idiomaForm: FormGroup;
  @Input() userId;
  @Input() idioma;
  @Output() edit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log(this.idioma);
    console.log(this.userId);
    this.idiomaForm = new FormGroup({
      idioma: new FormControl(this.idioma.idioma,[Validators.required, Validators.minLength(3),Validators.maxLength(55),Validators.pattern('^[a-zA-Z]*')]),
      nivel: new FormControl(this.idioma.nivel),
      fecha: new FormControl(this.idioma.fecha)
    });
  }

  submit(){
    console.log(this.idiomaForm.value);
    this.edit.emit(true);
  }

}
