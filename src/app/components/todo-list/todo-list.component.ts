import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

// TODO: Add change detection strategy OnPush
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todoItems: TodoItem[];
  @Output() outMarkAsDone = new EventEmitter<TodoItem>();
  @Output() outShowDetails = new EventEmitter<TodoItem>();

  markAsDone(todoItem: TodoItem) {
    this.outMarkAsDone.emit(todoItem);
  }

  showDetails(todoItem: TodoItem) {
    this.outShowDetails.emit(todoItem);
  }

  trackByNr(index: number, todoItem: TodoItem) {
    return todoItem.nr;
  }
}
