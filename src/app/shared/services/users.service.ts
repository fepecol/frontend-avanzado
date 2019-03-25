import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user';

@Injectable()

export class UsersService {
    base_url: string = 'http://mybackend.com/api/';
    users_endpoint = 'users';

    constructor(private http: HttpClient) {}

    //Gets all users
    getUsers() {
        return this.http
        .get<User[]>(this.base_url + this.users_endpoint);
    } //getusers
    
    getUser(userId) {
        return this.http
        .get<User>(`${this.base_url + this.users_endpoint}/${userId}`);
    } //getusers

    //Creates a task
    createUser(user) {
        return this.http
        .post<any>(this.base_url + this.users_endpoint, user);
    } //createusers
    
    //Updates a users
    updateUser(update) {
        return this.http
        .put<any>(this.base_url + this.users_endpoint, update);
    } //updateusers
    
    //Deletes a users
    deleteUser(userId) {
        return this.http
        .delete<any>(`${this.base_url + this.users_endpoint}/${userId}`);
    } //deleteusers
    
}