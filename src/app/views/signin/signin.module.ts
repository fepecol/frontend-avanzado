import { NgModule } from '@angular/core';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCheckboxModule,
  MatCardModule
} from '@angular/material';
import { MyOwnCustomMaterialModuleModule } from 'src/app/shared/my-own-custom-material-module/my-own-custom-material-module.module';

@NgModule({
  declarations: [SigninComponent],
  imports: [
    SharedModule, 
    SigninRoutingModule, 
    MyOwnCustomMaterialModuleModule, 
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatCheckboxModule,
    MatCardModule
  ],
  providers: []
})
export class SigninModule {}
