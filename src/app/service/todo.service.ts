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

  getTodo(no: string): TodoItem {
    return this.todos.find((todo) => todo.no === no) || <TodoItem>{};
  }

  private getNextNo() {
    return `${
      this.todos.reduce((n, todo) => +todo.no > +n ? +todo.no : +n, 0) + 1
    }`;
  }

  createTodo(title: string, description: string): void {
    // TODO: Change to immutable operation
    // Array.prototype.push is a mutable operation. Change this to
    // an immutable operation using Array.prototype.concat or array
    // spread operator i.e.:
    // const array = [1, 2, 3];
    // array = [...array, 4];
    this.todos.push({
      no: this.getNextNo(),
      done: false,
      title,
      description
    });
  }

  updateTodo(no: string, data: Partial<TodoItem>): void {
    const index = this.todos.findIndex((todo) => todo.no === no);
    if (index !== -1) {
      // TODO: Change to immutable operation
      // This is a mutable operation since we're updating the existing
      // object within the todos array. Change this to a mutable operation
      // using Object spread operator i.e.:
      // array[5] = {
      //   ...array[5],
      //   ...data
      // };
      Object.assign(this.todos[index], data);
    }
  }
}
