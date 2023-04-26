import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Output() onDataChange = new EventEmitter<void>();
  todoList: Todo[];

  constructor(
    private toasterService: ToastrService,
    private todoService: ToDoService,
  ) {
    this.todoList = [];
  }
  
  ngOnInit() {
    this.todoService.getTodos().subscribe((data) => {
      this.todoList = data as Todo[];
    });
  }

  toggleClass() {
    if (this.todo.isCompleted) {
      return { 'list-group-item-success': this.todo.isCompleted, 'border-primary': this.todo.isCompleted };
    } 
    return
  }

  deleteTodo(id: string) {
    this.todoService.deleteTodo(id).subscribe(() => this.reloadData());
    this.toasterService.error(`Todo ${this.todo.title} Deleted!`, 'Deleted Successfuly');
  }

  updateTodo(id: string) {
    this.todo.isCompleted = !this.todo.isCompleted;

    this.todoService.updateTodo(id,{
      "isCompleted": this.todo.isCompleted,
      title: this.todo.title,
      updatedAt: new Date()
    })
      .subscribe((updatedTodo) => {
        this.todo = updatedTodo;
      });

    this.todo.isCompleted ? this.toasterService.success(`Todo succesfully completed`, 'completed') : '';
  }

  reloadData() {
    this.onDataChange.emit();
  }
}
