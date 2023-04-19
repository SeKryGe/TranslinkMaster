import { Component, Input } from '@angular/core';
import { ToDoService } from '../../services/todo.service';
import { Todo } from '../../interfaces';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  
  @Input() todo!: Todo

  todoList?: Todo[]
  constructor (public toDoService: ToDoService) {
    this.todoList = toDoService.todoList
  }
}
