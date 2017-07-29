import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo: string = '';
  filterType: string;
  isToggleAll: boolean = false;
  private apiUrl = 'http://localhost:3000/todos';

  constructor(private http: Http) {
  }

  ngOnInit() {
    this.http.get(this.apiUrl)
      .subscribe(res => {
        this.todos = res.json();
      });
  }

  addTodo() {
    if(this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };

      this.http.post(this.apiUrl, newTodo)
        .subscribe(res => {
          let data = res.json();
          this.todos = [...this.todos]
          this.todos.push(data);
          this.todo = '';
        });
    }
  }

  clearComplete() {
    this.todos.filter(item => item.done)
      .forEach(item => {
        this.removeTodo(item);
      });
  }

  filterData(event) {
    this.filterType = event;
  }

  toggleAll(event) {
    this.todos = this.todos.map(item => {
      item.done = event;
      return item;
    });

    this.todos.forEach(item => {
      this.http.put(`${this.apiUrl}/${item.id}`, item)
        .subscribe();
    });
  }

  removeTodo(todo) {
    this.http.delete(`${this.apiUrl}/${todo.id}`)
      .subscribe(res => {
        this.todos = this.todos.filter(item => item.id !== todo.id);
      });
  }

  todoUpdate(todo) {
    this.http.put(`${this.apiUrl}/${todo.id}`, todo)
      .subscribe();
  }
}
