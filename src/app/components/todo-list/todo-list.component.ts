import {Component, Inject} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoItems: TodoItem[];

  constructor(@Inject(TodoService) private todoService: TodoService) {
    this.todoItems = todoService.getTodos();
  }

  toggleDone(todoItem: TodoItem) {
    this.todoService.updateTodo(todoItem.no, {
      done: !todoItem.done
    });
    this.todoItems = this.todoService.getTodos();
  }
}
