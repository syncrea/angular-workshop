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
    // URL: GET /api/todos
    return of([]);
  }

  loadTodo(id: number): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: GET /api/todos/:id
    return of(<TodoItem>{});
  }

  createTodo(data: any): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: POST /api/todos
    // Data: {title: string; description: string; done: boolean}
    return of(<TodoItem>{});
  }

  updateTodo(id: number, data: any): Observable<TodoItem> {
    // TODO: Create the necessary call to the backend
    // Examples: https://angular.io/tutorial/toh-pt6
    // URL: POST /api/todos/:id
    // Data: {title: string; description: string; done: boolean}
    return of(<TodoItem>{});
  }

  constructor(@Inject(HttpClient) private http: HttpClient) {}
}
