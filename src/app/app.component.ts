import { Component, OnInit } from '@angular/core';
import { DataService } from "./data.service";

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

  constructor(private dataSvc: DataService) {
  }

  ngOnInit() {
    this.dataSvc.getTodos()
      .subscribe(data => {
        this.todos = data;
      });
  }

  addTodo() {
    if(this.todo) {
      let newTodo = {
        text: this.todo,
        done: false
      };

      this.dataSvc.addTodo(newTodo)
        .subscribe(data => {
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
      this.dataSvc.updateTodo(item)
        .subscribe();
    });
  }

  removeTodo(todo) {
    this.dataSvc.removeTodo(todo)
      .subscribe(data => {
        this.todos = this.todos.filter(item => item.id !== todo.id);
      });
  }

  todoUpdate(todo) {
    this.dataSvc.updateTodo(todo)
      .subscribe();
  }
}
