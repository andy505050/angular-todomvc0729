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

  @Output() onClearBtnClick = new EventEmitter();

  filterType: string = 'All';

  @Output() filterTypeChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  changeFilterType(value) {
    this.filterType = value;
    this.filterTypeChanged.emit(value);
  }

}
