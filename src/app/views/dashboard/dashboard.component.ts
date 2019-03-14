import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  configForm: FormGroup;

  provincias=[{id: 0, provincia: "A Coruña"},{id: 1, provincia: "Álava"},{id: 2, provincia: "Albacete"},{id: 3, provincia: "Alicante"},{id: 4, provincia: "Almería"},{id: 5, provincia: "Asturias"},{id: 6, provincia: "Ávila"},{id: 7, provincia: "Badajoz"},{id: 8, provincia: "Baleares"},{id: 9, provincia: "Barcelona"},{id: 10, provincia: "Burgos"},{id: 11, provincia: "Cáceres"},{id: 12, provincia: "Cádiz"},{id: 13, provincia: "Cantabria"},{id: 14, provincia: "Castellón"},{id: 15, provincia: "Ciudad Real"},{id: 16, provincia: "Córdoba"},{id: 17, provincia: "Cuenca"},{id: 18, provincia: "Girona"},{id: 19, provincia: "Granada"},{id: 20, provincia: "Guadalajara"},{id: 21, provincia: "Gipuzkoa"},{id: 22, provincia: "Huelva"},{id: 23, provincia: "Huesca"},{id: 24, provincia: "Jaén"},{id: 25, provincia: "La Rioja"},{id: 26, provincia: "Las Palmas"},{id: 27, provincia: "León"},{id: 28, provincia: "Lérida"},{id: 29, provincia: "Lugo"},{id: 30, provincia: "Madrid"},{id: 31, provincia: "Málaga"},{id: 32, provincia: "Murcia"},{id: 33, provincia: "Navarra"},{id: 34, provincia: "Ourense"},{id: 35, provincia: "Palencia"},{id: 36, provincia: "Pontevedra"},{id: 37, provincia: "Salamanca"},{id: 38, provincia: "Segovia"},{id: 39, provincia: "Sevilla"},{id: 40, provincia: "Soria"},{id: 41, provincia: "Tarragona"},{id: 42, provincia: "Santa Cruz de Tenerife"},{id: 43, provincia: "Teruel"},{id: 44, provincia: "Toledo"},{id: 45, provincia: "Valencia"},{id: 46, provincia: "Valladolid"},{id: 47, provincia: "Vizcaya"},{id: 48, provincia: "Zamora"},{id: 49, provincia: "Zaragoza"}];

  constructor() { }

  ngOnInit() {
    this.configForm = new FormGroup({
      idioma: new FormControl(''),
      notificaciones: new FormArray([]),
      orders: new FormArray([])
    });
    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.provincias.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.configForm.controls.notificaciones   as FormArray).push(control);
    });
  }

  submit(){
    console.log(this.configForm.value);
  }

}
