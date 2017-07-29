import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHint = 'What needs to be done?';
  todos: any[] = [];

  addTodo(event) {
    if(event.target.value) {
      this.todos.push(event.target.value);
    }
  }
}
