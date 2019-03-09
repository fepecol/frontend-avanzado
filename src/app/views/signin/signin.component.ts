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
      console.log(users);
      users.forEach(function(user) {
        if(user.email==email && user.password==password){
          access=true;
        }
      });
      if(access){
        this._route.navigate(['/admin/profile']);
      }else{
        console.log('Error haciendo login');
      }
    });
  }
}
