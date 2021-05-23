import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todos';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  sr: number | any;
  desc: string | any;
  title: string | any;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const todo = {
      sno: this.sr,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.addTodo.emit(todo);
  }
}
