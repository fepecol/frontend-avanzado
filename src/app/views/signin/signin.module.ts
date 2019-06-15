import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from '../../shared/shared.module';
import {
  // MatButtonModule,
  // MatFormFieldModule,
  // MatInputModule,
  // MatRippleModule,
  // MatCheckboxModule,
  // MatCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    SharedModule, 
    SigninRoutingModule, 
    FlexLayoutModule
    // MatButtonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatRippleModule,
    // MatCheckboxModule,
    // MatCardModule
  ],
  providers: []
})
export class SigninModule {}
