import {Injectable} from '@angular/core';
import {TodoItem} from '../model/todo';

@Injectable()
export class TodoService {
  private todos: TodoItem[] = [{
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

  getTodo(nr: string): TodoItem {
    return this.todos.find((todo) => todo.no === nr) || <TodoItem>{};
  }

  private getNextNr() {
    return `${
      this.todos.reduce((n, todo) => +todo.no > +n ? +todo.no : +n, 0) + 1
    }`;
  }

  createTodo(data: any): void {
    this.todos.push({
      no: this.getNextNr(),
      done: false,
      ...data
    });
  }

  updateTodo(nr: string, data: any): void {
    const index = this.todos.findIndex((todo) => todo.no === nr);
    if (index !== -1) {
      Object.assign(this.todos[index], data);
    }
  }
}
