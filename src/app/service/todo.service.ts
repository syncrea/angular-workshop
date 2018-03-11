import {Inject, Injectable} from '@angular/core';
import {TodoItem} from '../model/todo';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TodoService {
  loadTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>('/api/todos');
  }

  loadTodo(id: number): Observable<TodoItem> {
    return this.http.get<TodoItem>(`/api/todos/${id}`);
  }

  createTodo(data: any): Observable<TodoItem> {
    return this.http.post<TodoItem>('/api/todos', data);
  }

  updateTodo(id: number, data: any): Observable<TodoItem> {
    return this.http.post<TodoItem>(`/api/todos/${id}`, data);
  }

  constructor(@Inject(HttpClient) private http: HttpClient) {}
}
