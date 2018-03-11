import {InMemoryDbService} from 'angular-in-memory-web-api';
import {TodoItem} from './model/todo';

export class TodoDb implements InMemoryDbService {
  createDb() {
    const todos: TodoItem[] = [{
      nr: '1',
      title: 'Todo 1',
      description: 'Todo 1 Description',
      done: true
    }, {
      nr: '2',
      title: 'Todo 2',
      description: 'Todo 2 Description',
      done: false
    }, {
      nr: '3',
      title: 'Todo 3',
      description: 'Todo 3 Description',
      done: false
    }];

    return {todos};
  }
}
