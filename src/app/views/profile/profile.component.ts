import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import {User} from '../../shared/models/user';
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

  constructor(private route: ActivatedRoute, private usersservice: UsersService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => this.id = params.userId);
    console.log(this.id);
    this.usersservice.getUser(this.id).subscribe(user => {
      console.log(user);
      this.datos_personales=user.datos_personales;
      this.formacion=user.formacion_academica;
      this.experiencia=user.experiencia_laboral;
      this.idiomas=user.idiomas;
    });
  }

}
