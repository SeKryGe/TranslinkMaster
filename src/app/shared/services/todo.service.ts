import { Injectable } from '@angular/core';
import { Todo } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  host = 'http://localhost:3000/api/todos';
  
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.host}`).pipe(map((res) => res));
  }
  
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.host}`, { 
      "title": todo.title,
      "isCompleted": false
    });
  }
  
  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${this.host}/${id}`);
  }

  updateTodo(id: string, todo: Todo) : Observable<Todo> {
    return this.http.put<Todo>(`${this.host}/${id}`, {
      "isCompleted": todo.isCompleted
    })
  }
}
