import { Component, EventEmitter, Output } from '@angular/core';
import { ToDoService } from '../shared/services/todo.service';
import { Todo } from '../shared/interfaces';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todoList!: Todo
  title = ''
  @Output() onDataChange = new EventEmitter<void>();

  constructor(public todoService: ToDoService) { }

  onSubmit() {
    if(this.title != '') {
      this.todoService.addTodo({
        "title": this.title,
        isCompleted: false,
        updatedAt: new Date()
      }).subscribe(res => {
        res;
        this.reloadData()
      });
    } 
    this.title = ''
  }

  reloadData() {
    this.onDataChange.emit();
  }

}
