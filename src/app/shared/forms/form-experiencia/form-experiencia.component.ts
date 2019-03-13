import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Experencia } from '../../models/experiencia';

@Component({
  selector: 'app-form-experiencia',
  templateUrl: './form-experiencia.component.html',
  styleUrls: ['./form-experiencia.component.scss']
})
export class FormExperienciaComponent implements OnInit {
  experienciaForm: FormGroup;
  experiencia: Experencia;
  @Input() user;
  @Input() index;
  @Input() new;
  @Output() edit = new EventEmitter<boolean>();
  
  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    console.log(this.experiencia);
    this.experiencia=this.user.experiencia_laboral[this.index] || {};
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
    if(this.new){
      this.user.experiencia_laboral.push(this.experienciaForm.value);
    }else{
      this.user.experiencia_laboral[this.index]=this.experienciaForm.value;
    }
    this.usersservice.updateUser(this.user).subscribe(res => {
      this.edit.emit(true);
    });
  }

}
