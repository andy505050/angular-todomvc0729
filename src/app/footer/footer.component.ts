import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _todos: any[] = [];

  @Input('data')
  set todos(value) {
    this._todos = value;
    this.tooMore = this.todos.length > 5;
  }

  get todos() {
    return this._todos;
  }

  tooMore: boolean = false;

  @Output() clearComplete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  doClear() {
    this.clearComplete.emit();
  }

}
