import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../shared/services/todo.service';
import { Todo } from '../shared/interfaces';
import { Observable, map } from 'rxjs';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit  {

  todoList!: Observable<Todo[]>
 constructor (public todoService: ToDoService) {}

  ngOnInit(): void {
    this.todoList = this.todoService.getTodos();
  }

 }
