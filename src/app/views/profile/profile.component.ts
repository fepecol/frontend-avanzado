import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: number;
  user: User;
  datos_personales: User["datos_personales"];
  formacion: User["formacion_academica"];
  experiencia: User["experiencia_laboral"];
  idiomas: User["idiomas"];
  edit: boolean;
  edit_datospersonales: boolean;
  edit_formacion: boolean;
  edit_experiencia: boolean;
  edit_idiomas: boolean;
  editForm: FormGroup;

  constructor(private route: ActivatedRoute, private usersservice: UsersService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.id = params.userId);
    this.edit=false;
    this.edit_datospersonales=false;
    this.edit_formacion=false;
    this.edit_experiencia=false;
    this.edit_idiomas=false;
    this.usersservice.getUser(this.id).subscribe(user => {
      console.log(user);
      this.datos_personales=user.datos_personales;
      this.formacion=user.formacion_academica;
      this.experiencia=user.experiencia_laboral;
      this.idiomas=user.idiomas;
    });
  }

  editar(){
    this.edit?this.edit=false:this.edit=true
  }

  editDatos(){
    this.editar();
    this.edit_datospersonales?this.edit_datospersonales=false:this.edit_datospersonales=true
  }

  editFormacion(){
    this.editar();
    this.edit_formacion?this.edit_formacion=false:this.edit_formacion=true
  }

  editExperiencia(){
    this.editar();
    this.edit_experiencia?this.edit_experiencia=false:this.edit_experiencia=true
  }

  editIdiomas(){
    this.editar();
    this.edit_idiomas?this.edit_idiomas=false:this.edit_idiomas=true
  }

  editSucces(ev){
    console.log(ev);
    this.editDatos();
  }
}
