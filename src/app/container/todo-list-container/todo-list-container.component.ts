import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {store, ToggleDoneAction} from '../../state/state';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListContainerComponent {
  todoItems: Observable<TodoItem[]>;

  constructor(private todoService: TodoService,
              private router: Router) {
    this.todoItems = store.select(state => state.todos);
  }

  toggleDone(todoItem: TodoItem) {
    store.dispatch(new ToggleDoneAction(todoItem.id));
  }

  showDetails(todoItem: TodoItem) {
    this.router.navigate(['/todos', todoItem.id]);
  }

  replayHistory() {
    store.replayHistory(1000);
  }
}
