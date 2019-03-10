import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from '../../shared/form/form.component';

@NgModule({
  declarations: [ProfileComponent, FormComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
