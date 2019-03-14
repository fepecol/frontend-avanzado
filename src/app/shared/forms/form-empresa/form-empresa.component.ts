import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-empresa',
  templateUrl: './form-empresa.component.html',
  styleUrls: ['./form-empresa.component.scss']
})
export class FormEmpresaComponent implements OnInit {

  empresaForm: FormGroup;
  @Input() empresa;
  @Input() empresaId;
  @Output() edit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log(this.empresa);
    console.log(this.empresaId);
    this.empresaForm = new FormGroup({
      nombre: new FormControl(this.empresa.nombre,[Validators.required, Validators.minLength(3),Validators.maxLength(55),Validators.pattern('^[a-zA-Z]*')]),
      razonSocial: new FormControl(this.empresa.razonSocial,[Validators.required, Validators.minLength(3),Validators.maxLength(55),Validators.pattern('^[a-zA-Z]*')]),
      cif: new FormControl(this.empresa.cif),
      direcion: new FormControl(this.empresa.direccion),
      provincia: new FormControl(this.empresa.provincia),
      municipio: new FormControl(this.empresa.municipio),
      url: new FormControl(this.empresa.url),
      contactoNombre: new FormControl(this.empresa.contacto.nombre),
      contactoTelefono: new FormControl(this.empresa.contacto.telefono),
      contactoEmail: new FormControl(this.empresa.contacto.email),
    });
  }

  submit(){
    console.log(this.empresaForm.value);
    this.edit.emit(true);
  }

}
