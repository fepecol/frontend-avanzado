import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from '../../shared/forms/form/form.component';
import { FormExperienciaComponent } from '../../shared/forms/form-experiencia/form-experiencia.component';

@NgModule({
  declarations: [ProfileComponent, FormComponent, FormExperienciaComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
