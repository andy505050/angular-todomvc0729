import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos: any[] = [];
  todo: string = '';
  filterType: string;
  isToggleAll: boolean = false;

  constructor(private http: Http) {
  }

  addTodo() {
    if(this.todo) {
      this.todos = [...this.todos]
      this.todos.push({
        text: this.todo,
        done: false
      });
      this.todo = '';
    }
  }

  clearComplete() {
    this.todos = this.todos.filter(item => !item.done);
  }

  filterData(event) {
    this.filterType = event;
  }

  toggleAll(event) {
    this.todos = this.todos.map(item => {
      item.done = event;
      return item;
    });
  }

  removeTodo(todo) {
    this.todos = this.todos.filter(item => item !== todo);
  }
}
