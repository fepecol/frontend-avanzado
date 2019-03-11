import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Empresa} from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  base_url: string = 'http://mybackend.com/api/';
  endpoint = 'empresas';

  constructor(private http: HttpClient) {}

    //Gets all tasks
    getEmpresas() {
        return this.http
        .get<Empresa[]>(this.base_url + this.endpoint);
    } //getTasks

    getEmpresa(empresaId) {
      return this.http
      .get<Empresa>(`${this.base_url + this.endpoint}/${empresaId}`);
  } //getTasks

}
