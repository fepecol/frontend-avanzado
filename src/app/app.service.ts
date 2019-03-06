import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AppService {
    base_url: string = 'http://mybackend.com/api/';
    tasks_endpoint = 'tasks';

    constructor(private http: HttpClient) {}

    //Gets all tasks
    getTasks() {
        return this.http
        .get<any>(this.base_url + this.tasks_endpoint);
    } //getTasks

    //Creates a task
    createTask(task) {
        return this.http
        .post<any>(this.base_url + this.tasks_endpoint, task);
    } //createTask
    
    //Updates a Task
    updateTask(update) {
        return this.http
        .put<any>(this.base_url + this.tasks_endpoint, update);
    } //updateTask
    
    //Deletes a Task
    deleteTask(taskId) {
        return this.http
        .delete<any>('${this.base_url + this.tasks_endpoint}/${taskId}');
    } //deleteTask
}