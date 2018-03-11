import {Component, Inject} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';
import {Observable} from 'rxjs/Observable';
import {switchMap, take} from 'rxjs/operators';

@Component({
  selector: 'app-todo-details-container',
  templateUrl: './todo-details-container.component.html',
  styleUrls: ['./todo-details-container.component.css']
})
export class TodoDetailsContainerComponent {
  todoItem: Observable<TodoItem>;

  constructor(@Inject(TodoService) private todoService: TodoService,
              @Inject(Router) private router: Router,
              @Inject(ActivatedRoute) private route: ActivatedRoute) {
    this.todoItem = route.params
      .pipe(
        switchMap((params) => todoService.loadTodo(params.nr))
      );
  }

  updateTodo(data: any) {
    this.route.params
      .pipe(
        take(1),
        switchMap((params) => this.todoService.updateTodo(params.nr, data))
      )
      .subscribe(() => this.router.navigate(['/todos']));
  }
}
