import {Component, Inject} from '@angular/core';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';
import {take} from "rxjs/operators";

@Component({
  selector: 'app-create-todo-container',
  templateUrl: './create-todo-container.component.html',
  styleUrls: ['./create-todo-container.component.css']
})
export class CreateTodoContainerComponent {
  constructor(@Inject(TodoService) private todoService: TodoService,
              @Inject(Router) private router: Router) {}

  createTodo(todoData: any) {
    this.todoService.createTodo(todoData)
      .subscribe(() => this.router.navigate(['/todos']));
  }
}
