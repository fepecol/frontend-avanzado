import { Component, OnInit, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

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
  provincias=[{id: 0, provincia: "A Coruña"},{id: 1, provincia: "Álava"},{id: 2, provincia: "Albacete"},{id: 3, provincia: "Alicante"},{id: 4, provincia: "Almería"},{id: 5, provincia: "Asturias"},{id: 6, provincia: "Ávila"},{id: 7, provincia: "Badajoz"},{id: 8, provincia: "Baleares"},{id: 9, provincia: "Barcelona"},{id: 10, provincia: "Burgos"},{id: 11, provincia: "Cáceres"},{id: 12, provincia: "Cádiz"},{id: 13, provincia: "Cantabria"},{id: 14, provincia: "Castellón"},{id: 15, provincia: "Ciudad Real"},{id: 16, provincia: "Córdoba"},{id: 17, provincia: "Cuenca"},{id: 18, provincia: "Girona"},{id: 19, provincia: "Granada"},{id: 20, provincia: "Guadalajara"},{id: 21, provincia: "Gipuzkoa"},{id: 22, provincia: "Huelva"},{id: 23, provincia: "Huesca"},{id: 24, provincia: "Jaén"},{id: 25, provincia: "La Rioja"},{id: 26, provincia: "Las Palmas"},{id: 27, provincia: "León"},{id: 28, provincia: "Lérida"},{id: 29, provincia: "Lugo"},{id: 30, provincia: "Madrid"},{id: 31, provincia: "Málaga"},{id: 32, provincia: "Murcia"},{id: 33, provincia: "Navarra"},{id: 34, provincia: "Ourense"},{id: 35, provincia: "Palencia"},{id: 36, provincia: "Pontevedra"},{id: 37, provincia: "Salamanca"},{id: 38, provincia: "Segovia"},{id: 39, provincia: "Sevilla"},{id: 40, provincia: "Soria"},{id: 41, provincia: "Tarragona"},{id: 42, provincia: "Santa Cruz de Tenerife"},{id: 43, provincia: "Teruel"},{id: 44, provincia: "Toledo"},{id: 45, provincia: "Valencia"},{id: 46, provincia: "Valladolid"},{id: 47, provincia: "Vizcaya"},{id: 48, provincia: "Zamora"},{id: 49, provincia: "Zaragoza"}];

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
      provincias: new FormArray([]),
    });
    this.addProvincias();
  }

  submit(){
    console.log(this.empresaForm.value);
    this.edit.emit(true);
  }

  private addProvincias() {
    this.provincias.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.empresaForm.controls.provincias as FormArray).push(control);
    });
  }

}
