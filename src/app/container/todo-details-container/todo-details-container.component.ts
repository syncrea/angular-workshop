import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TodoItem} from '../../model/todo';
import {ActivatedRoute, Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-todo-details-container',
  templateUrl: './todo-details-container.component.html',
  styleUrls: ['./todo-details-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoDetailsContainerComponent {
  todoItem: TodoItem;

  constructor(private todoService: TodoService,
              private router: Router,
              private route: ActivatedRoute) {
    route.params
      .subscribe((params) => {
        this.todoItem = this.todoService.getTodo(params.no);
      });
  }

  updateTodo(data: any) {
    this.todoService.updateTodo(this.route.snapshot.params.no, data);
    this.router.navigate(['/todos']);
  }
}
