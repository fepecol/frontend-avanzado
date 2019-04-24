import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/app/shared/app.settings';
import { Effect, ofType, Actions} from '@ngrx/effects';
import { Observable } from 'rxjs';


@Injectable()
export class SigninService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>(AppSettings.API_ENDPOINT_USERS).toPromise();
  }

  getUsers2() {
    return this.http.get<any>(AppSettings.API_ENDPOINT_USERS);
  }

  async login({ email, password }): Promise<any> {
    const users = await this.getUsers();
    // Mock response from backend:
    return users.find(
      (user: any) => user.email === email && user.password === password
    );
  }

  async login2(email: string, password: string): Promise<any> {
    console.log(email, password);
    const users = await this.getUsers();
    return users.find(
      (user: any) => user.email === email && user.password === password
    );
  }
  
}
