import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  siginForm: FormGroup;
  constructor() { 
  }

  ngOnInit() {
    this.siginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.siginForm.value);
  }

}
