import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {TodoService} from '../../service/todo.service';

@Component({
  selector: 'app-create-todo-container',
  templateUrl: './create-todo-container.component.html',
  styleUrls: ['./create-todo-container.component.css']
})
export class CreateTodoContainerComponent {
  constructor(private todoService: TodoService,
              private router: Router) {}

  createTodo(todoData: any) {
    this.todoService.createTodo(todoData);
    this.router.navigate(['/todos']);
  }
}
