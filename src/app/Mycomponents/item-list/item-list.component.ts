import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Todo } from "../../todos";
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {  
  @Input() todo: Todo | any;
  constructor() { }
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter()
  @Output() checkedout : EventEmitter<Todo> = new EventEmitter()
  ngOnInit(): void {
  }
  onClick(todo: Todo){
    this.todoDelete.emit(todo)
    console.log("item will be deleted");
  }
  clickCheckbox(todo: Todo){
    this.checkedout.emit(todo);
  }
}
