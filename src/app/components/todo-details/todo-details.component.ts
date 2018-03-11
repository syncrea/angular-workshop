import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from '../../model/todo';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {
  @Input() todoItem: TodoItem;
  @Input() applyButtonText: string;
  @Output() outApplyChanges = new EventEmitter<any>();

  applyChanges(title: string, description: string) {
    this.outApplyChanges.emit({
      title,
      description
    });
  }
}
