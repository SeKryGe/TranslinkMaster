import { Injectable } from '@angular/core';
import { Todo } from '../interfaces';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    })
  };

  host = 'http://localhost:3000/todos';
  
  
  constructor(
    private http: HttpClient,
    private toast: ToastrService
    ) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.host}`, this.httpOptions)
  }
  
  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(`${this.host}`, { 
      "title": todo.title,
      "isCompleted": false
    }, this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        this.toast.error(error.error.message, 'Error', {
          closeButton: true,
          timeOut: 5000
        });
        return throwError(error);
      }) 
    )
  }
  
  deleteTodo(id: string): Observable<Todo> {
    return this.http.delete<Todo>(`${this.host}/${id}`, this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        this.toast.error(error.error.message, 'Error', {
          closeButton: true,
          timeOut: 5000
        });
        return throwError(error);
      })
    )
  }

  updateTodo(id: string, todo: Todo) : Observable<Todo> {
    return this.http.put<Todo>(`${this.host}/${id}`, {
      "isCompleted": todo.isCompleted
    }, this.httpOptions)
  }
}
