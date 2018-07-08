import {Component, Inject} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css']
})
export class TodoListContainerComponent {
  todoItems: TodoItem[];

  constructor(@Inject(TodoService) private todoService: TodoService,
              @Inject(Router) private router: Router) {
    this.todoItems = todoService.getTodos();
  }

  toggleDone(todoItem: TodoItem) {
    this.todoService.updateTodo(todoItem.no, {
      done: !todoItem.done
    });
    this.todoItems = this.todoService.getTodos();
  }

  showDetails(todoItem: TodoItem) {
    // TODO: Use the router instance to navigate to the details view
    // Since the router is injected you can use the navigate method on the
    // router object to trigger a navigation to the details view.
    // See https://angular.io/api/router/Router#navigate for more details
    // Use todoItem.nr to obtain the nr param which needs to be passed into
    // the navigated URL
  }
}
