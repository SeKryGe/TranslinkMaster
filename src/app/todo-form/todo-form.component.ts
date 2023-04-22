import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../shared/services/todo.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  todo = '';

  constructor(public todoService: ToDoService) { }
  
  

  onSubmit(){
    if(this.todo != '') {
      this.todoService.addTodo(this.todo);
    }
    this.todo = '';
  }
}
