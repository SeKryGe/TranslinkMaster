import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from '../../services/todo.service';
import { Todo } from '../../interfaces';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  @Input() todo!: Todo

  todoList?: Todo[]
  completed: boolean = false;

  constructor(public todoService: ToDoService,
     private toasterService: ToastrService) { 
      this.todoList = todoService.todoList
     }

  ngOnInit(): void {
  }

  onChange() {
    console.log("changed");
    this.completed = !this.completed;
    this.completed ? this.toasterService.success(`Todo succesfully completed`, 'completed') : '';
  }

  onCliCk() {
    console.log("Clicked");
  }

  toggleClass() {
    if (this.completed) {
      return { 'list-group-item-success': this.completed, 'border-primary': this.completed };
    } 
    return
  }

  deleteTodo(item:any) {
    this.todo = item;
    this.todoService.deleteTodo(item);
    this.toasterService.error(`Todo ${item.id} Deleted!`, 'Deleted Successfuly');
  }
}
