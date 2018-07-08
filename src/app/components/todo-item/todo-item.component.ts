import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem: TodoItem;
  @Output() outToggleDone = new EventEmitter<TodoItem>();

  toggleDone() {
    this.outToggleDone.emit(this.todoItem);
  }
}
