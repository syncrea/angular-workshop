import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-create-todo-container',
  templateUrl: './create-todo-container.component.html',
  styleUrls: ['./create-todo-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTodoContainerComponent {
  constructor(private todoService: TodoService,
              private router: Router) {}

  createTodo(title: string, description: string) {
    this.todoService.createTodo(title, description);
    this.router.navigate(['/todos']);
  }
}
