import { Component } from '@angular/core';
import { ToDoService } from '../shared/services/todo.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent  {

 constructor (public todoService: ToDoService ) {}

 }
