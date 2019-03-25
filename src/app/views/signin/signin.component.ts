import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private usersservice: UsersService, private _route: Router) {  
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    });
  }

  submit() {
    this.getAcces(this.loginForm.value.email, this.loginForm.value.password);
  }

  getAcces(email, password){
    this.usersservice.getUsers().subscribe(users => {
      let access=false;
      let userId=0;
      console.log(users);
      users.forEach(function(user) {
        if(user.datos_personales.email==email && user.datos_personales.password==password){
          access=true;
          userId=user.id;
        }
      });
      if(access){
        this._route.navigate(['/admin/dashboard'],{queryParams: {userId} });
      }else{
        alert('Error usuario o contraseña incorrectos');
      }
    });
  }
}
