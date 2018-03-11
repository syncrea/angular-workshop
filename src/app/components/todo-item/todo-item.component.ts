import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

// TODO: Add change detection strategy OnPush
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem: TodoItem;
  @Output() outMarkAsDone = new EventEmitter<TodoItem>();
  @Output() outShowDetails = new EventEmitter<TodoItem>();

  markAsDone() {
    this.outMarkAsDone.emit(this.todoItem);
  }

  @HostListener('click')
  showDetails() {
    this.outShowDetails.emit(this.todoItem);
  }
}
