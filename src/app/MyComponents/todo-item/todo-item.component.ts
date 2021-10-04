import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = new Todo;
  @Input() i: number;

  @Output()
  todoDelete : EventEmitter<Todo> = new EventEmitter();

  @Output()
  checkBoxClicked : EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("OnClick has been triggered!!");
  }

  onCheckboxClick(todo : Todo){
    this.checkBoxClicked.emit(todo);
    console.log("Check box is clicked!!");
  }

}
