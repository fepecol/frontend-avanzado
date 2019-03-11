import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { EmpresasService } from '../../shared/services/empresas.service';
import { User } from '../../shared/models/user';
import { Empresa } from '../../shared/models/empresa';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileUser: boolean=false;
  profileEmpresa: boolean=false;
  userId: number;
  empresaId: number;
  datos_personales: User["datos_personales"];
  formaciones: User["formacion_academica"];
  formacion: object;
  experiencias: User["experiencia_laboral"];
  experiencia: object;
  idiomas: User["idiomas"];
  idioma: object;
  empresa: Empresa;
  edit: boolean=false;
  edit_datospersonales: boolean=false;
  edit_formacion: boolean=false;
  edit_experiencia: boolean=false;
  edit_idiomas: boolean=false;
  edit_empresa: boolean=false;
  editForm: FormGroup;

  constructor(private route: ActivatedRoute, 
    private usersservice: UsersService, 
    private empresasservice: EmpresasService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.userId = params.userId);
    this.route.queryParams.subscribe(params => this.empresaId = params.empresaId);
    if(this.userId!=undefined){
      this.profileUser=true;
      this.usersservice.getUser(this.userId).subscribe(user => {
        this.datos_personales=user.datos_personales;
        this.formaciones=user.formacion_academica;
        this.experiencias=user.experiencia_laboral;
        this.idiomas=user.idiomas;
      });
    }
    if(this.empresaId!=undefined){
      this.profileEmpresa=true;
      this.empresasservice.getEmpresa(this.empresaId).subscribe(empresa => {
        console.log(empresa);
        this.empresa=empresa;
      });
    }
  }

  editar(){
    this.edit?this.edit=false:this.edit=true
  }

  editDatos(){
    this.editar();
    this.edit_datospersonales?this.edit_datospersonales=false:this.edit_datospersonales=true
  }

  newFormacion(){
    this.formacion={};
    this.editar();
    this.edit_formacion?this.edit_formacion=false:this.edit_formacion=true
  }

  editFormacion(item){
    this.formacion=item;
    this.editar();
    this.edit_formacion?this.edit_formacion=false:this.edit_formacion=true
  }

  deleteFormacion(item){
    console.log('Eliminar formacion', item);
  }

  newExperiencia(){
    this.experiencia={};
    this.editar();
    this.edit_experiencia?this.edit_experiencia=false:this.edit_experiencia=true
  }
  editExperiencia(item){
    this.experiencia=item;
    this.editar();
    this.edit_experiencia?this.edit_experiencia=false:this.edit_experiencia=true
  }

  deleteExperiencia(item){
    console.log('Eliminar experiencia', item);
  }

  newIdiomas(){
    this.idioma={};
    this.editar();
    this.edit_idiomas?this.edit_idiomas=false:this.edit_idiomas=true
  }
  
  editIdiomas(item){
    this.idioma=item;
    this.editar();
    this.edit_idiomas?this.edit_idiomas=false:this.edit_idiomas=true
  }

  deleteIdiomas(item){
    console.log('Eliminar idioma', item);
  }

  editEmpresa(){
    console.log('editar empresa');
    this.edit_empresa?this.edit_empresa=false:this.edit_empresa=true
  }

  onEdit(ev){
    console.log(ev);
    this.editar();
    this.edit_datospersonales=false;
    this.edit_formacion=false;
    this.edit_experiencia=false;
    this.edit_idiomas=false;
    this.edit_empresa=false;
  }
}
