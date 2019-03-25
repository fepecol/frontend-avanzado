import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';
import { FormDetailComponent } from '../../shared/forms/form-detail/form-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [OffersComponent, FormDetailComponent],
  imports: [
    CommonModule,
    OffersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OffersModule { }
