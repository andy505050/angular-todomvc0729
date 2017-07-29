import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnChanges {

  @Input('data') todos: any[] = [];

  tooMore: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.tooMore = this.todos.length > 5;
  }

}
