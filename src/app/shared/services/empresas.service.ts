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

  //Gets all empresas
  getEmpresas() {
      return this.http
      .get<Empresa[]>(this.base_url + this.endpoint);
  } //getempresas

  getEmpresa(empresaId) {
    return this.http
    .get<Empresa>(`${this.base_url + this.endpoint}/${empresaId}`);
  } //getempresas

  //Creates a task
  createEmpresa(empresa) {
    return this.http
    .post<any>(this.base_url + this.endpoint, empresa);
  } //createempresas

  //Updates a Empresas
  updateEmpresa(update) {
      return this.http
      .put<any>(this.base_url + this.endpoint, update);
  } //updateempresas

  //Deletes a empresas
  deleteEmpresa(empresaId) {
      return this.http
      .delete<any>(`${this.base_url + this.endpoint}/${empresaId}`);
  } //deleteempresas

}
