import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from "rxjs";

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  private apiUrl = 'http://localhost:3000/todos';

  constructor(private http: Http) { }

  getTodos(): Observable<any[]> {
    return this.http.get(this.apiUrl)
      .map(res => res.json());
  }

  addTodo(todo): Observable<any> {
    return this.http.post(this.apiUrl, todo)
      .map(res => res.json());
  }

  removeTodo(todo): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${todo.id}`)
      .map(res => res.json());
  }

  updateTodo(todo): Observable<any> {
    return this.http.put(`${this.apiUrl}/${todo.id}`, todo)
      .map(res => res.json());
  }

}
