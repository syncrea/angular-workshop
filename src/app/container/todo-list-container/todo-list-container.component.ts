import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListContainerComponent {
  todoItems: TodoItem[];

  constructor(private todoService: TodoService,
              private router: Router) {
    this.todoItems = todoService.getTodos();
  }

  toggleDone(todoItem: TodoItem) {
    this.todoService.updateTodo(todoItem.no, {
      done: !todoItem.done
    });
    this.todoItems = this.todoService.getTodos();
  }

  showDetails(todoItem: TodoItem) {
    this.router.navigate(['/todos', todoItem.no]);
  }
}
