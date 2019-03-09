import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  getPasswordForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.getPasswordForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email])
    });
  }

  submit() {
    console.log(this.getPasswordForm.value);
  }

}
