import {Injectable} from '@angular/core';
import {TodoItem} from '../model/todo';

@Injectable()
export class TodoService {
  todos: TodoItem[] = [{
    no: '1',
    title: 'Todo 1',
    description: 'Todo 1 Description',
    done: true
  }, {
    no: '2',
    title: 'Todo 2',
    description: 'Todo 2 Description',
    done: false
  }, {
    no: '3',
    title: 'Todo 3',
    description: 'Todo 3 Description',
    done: false
  }];

  getTodos(): TodoItem[] {
    return this.todos;
  }

  getTodo(no: string): TodoItem {
    return this.todos.find((todo) => todo.no === no) || <TodoItem>{};
  }

  private getNextNo() {
    return `${
      this.todos.reduce((n, todo) => +todo.no > +n ? +todo.no : +n, 0) + 1
    }`;
  }

  createTodo(title: string, description: string): void {
    this.todos = [
      ...this.todos, {
        no: this.getNextNo(),
        done: false,
        title,
        description
      }
    ];
  }

  updateTodo(no: string, data: Partial<TodoItem>): void {
    const index = this.todos.findIndex((todo) => todo.no === no);
    if (index !== -1) {
      this.todos[index] = {
        ...this.todos[index],
        ...data
      };
    }
  }
}
