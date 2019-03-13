import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
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
  @Input() user;
  @Input() index;
  @Input() new;
  @Output() edit = new EventEmitter<boolean>();

  constructor(private usersservice: UsersService) { }

  ngOnInit() {
    
    this.idioma=this.user.idiomas[this.index] || {nivel:'',idioma:'',fecha:''};
    this.idiomaForm = new FormGroup({
      idioma: new FormControl(this.idioma.idioma,[Validators.required, Validators.minLength(3),Validators.maxLength(55)/*,Validators.pattern('^[a-zA-Z]*')*/]),
      nivel: new FormControl(this.idioma.nivel),
      fecha: new FormControl(this.idioma.fecha)
    });
  }

  submit(){
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
