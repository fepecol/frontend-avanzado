import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {User} from '../models/user';

@Injectable()

export class UsersService {
    base_url: string = 'http://mybackend.com/api/';
    users_endpoint = 'users';

    constructor(private http: HttpClient) {}

    //Gets all tasks
    getUsers() {
        return this.http
        .get<User[]>(this.base_url + this.users_endpoint);
    } //getTasks
    
    getUser(userId) {
        return this.http
        .get<User>(`${this.base_url + this.users_endpoint}/${userId}`);
    } //getTasks

    //Creates a task
    createUser(user) {
        return this.http
        .post<any>(this.base_url + this.users_endpoint, user);
    } //createTask
    
    //Updates a Task
    updateUser(update) {
        return this.http
        .put<any>(this.base_url + this.users_endpoint, update);
    } //updateTask
    
    //Deletes a Task
    deleteUser(userId) {
        return this.http
        .delete<any>(`${this.base_url + this.users_endpoint}/${userId}`);
    } //deleteTask
    
}