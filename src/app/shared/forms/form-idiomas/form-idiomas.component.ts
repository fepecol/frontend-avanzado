import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Idioma } from '../../models/idioma';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-form-idiomas',
  templateUrl: './form-idiomas.component.html',
  styleUrls: ['./form-idiomas.component.scss']
})
export class FormIdiomasComponent implements OnInit {

  idiomaForm: FormGroup;
  idioma: Idioma;
  otroIdioma: boolean=false;
  @Input() user;
  @Input() index;
  @Input() new;
  @Output() edit = new EventEmitter<boolean>();

  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    
    this.idioma=this.user.idiomas[this.index] || {nivel:'',idioma:'',fecha:''};
    this.idiomaForm = new FormGroup({
      idioma: new FormControl(this.idioma.idioma),
      otroIdioma: new FormControl(''),
      nivel: new FormControl(this.idioma.nivel),
      fecha: new FormControl(this.idioma.fecha,[Validators.pattern('^[0-9]{2}[/][0-9]{2}[/][0-9]{4}')])
    });
  }

  otherIdioma(idioma){
    if(idioma=='Otro'){
      this.otroIdioma=true;
    }else{
      this.otroIdioma=false;
      this.idiomaForm.value.otroIdioma='';
    }
  }

  submit(){
    console.log(this.idiomaForm.value);
    if(this.idiomaForm.value.otroIdioma){
      this.idiomaForm.value.idioma=this.idiomaForm.value.otroIdioma;
    }
    console.log(this.idiomaForm.value); 
    /* diferenciar entre new o edit */
    if(this.new){
      this.user.idiomas.push(this.idiomaForm.value);
    }else{
      this.user.idiomas[this.index]=this.idiomaForm.value;
    }
    this.usersservice.updateUser(this.user).subscribe(res => {
      this.edit.emit(true);
    });
  }

}
