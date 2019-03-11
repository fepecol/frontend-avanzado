import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormPersonalComponent } from '../../shared/forms/form-personal/form-personal.component';
import { FormExperienciaComponent } from '../../shared/forms/form-experiencia/form-experiencia.component';
import { FormFormacionComponent } from '../../shared/forms/form-formacion/form-formacion.component';
import { FormIdiomasComponent } from '../../shared/forms/form-idiomas/form-idiomas.component';
import { FormEmpresaComponent } from '../../shared/forms/form-empresa/form-empresa.component';

@NgModule({
  declarations: [
    ProfileComponent, 
    FormPersonalComponent, 
    FormExperienciaComponent, 
    FormFormacionComponent,
    FormIdiomasComponent,
    FormEmpresaComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class ProfileModule { }
