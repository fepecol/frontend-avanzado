import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit {


  detailForm: FormGroup;
  boton: string;
  @Input() empresaProfile;
  @Input() offer;
  @Input() empresa;
  @Input() borrar;
  @Output() edit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log(this.offer);
    console.log(this.empresa);
    this.borrar?this.boton="Borrarse":this.boton="Inscribirse";
    this.detailForm = new FormGroup({
      empresa: new FormControl(this.offer.empresa,[Validators.required, Validators.minLength(3),Validators.maxLength(55)]),
      puesto: new FormControl(this.offer.puesto),
      descripcion: new FormControl(this.offer.descripcion),
      provincia: new FormControl(this.offer.provincia),
      municipio: new FormControl(this.offer.municipio),
      familia: new FormControl(this.offer.familia),
      titulos: new FormControl(this.offer.titulos),
    });
  }

  submit(){
    if(this.empresaProfile){
      console.log(this.empresa);
    }else{
      if(this.borrar){
        console.log('borrarse');
      }else{
        console.log('inscribirse');
      }
      console.log(this.detailForm.value);
    }
    this.edit.emit(true);
  }

}
