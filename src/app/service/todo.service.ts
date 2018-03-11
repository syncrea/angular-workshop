import {Inject, Injectable} from '@angular/core';
import {TodoItem} from '../model/todo';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TodoService {
  loadTodos(): Observable<TodoItem[]> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: GET http://localhost/api/todos
    return of([]);
  }

  loadTodo(nr: string): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: GET http://localhost/api/todos/:nr
    return of(<TodoItem>{});
  }

  createTodo(data: any): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: POST http://localhost/api/todos
    // Data: {title: string; description: string; done: boolean}
    return of(<TodoItem>{});
  }

  updateTodo(nr: string, data: any): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: POST http://localhost/api/todos/:nr
    // Data: {title: string; description: string; done: boolean}
    return of(<TodoItem>{});
  }

  constructor(@Inject(HttpClient) private http: HttpClient) {}
}
