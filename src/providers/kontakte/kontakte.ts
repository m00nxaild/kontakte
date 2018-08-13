import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the KontakteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KontakteProvider {
  private todos = [];

  constructor(public http: HttpClient) {
    console.log('Hello KontakteProvider Provider');
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

}
