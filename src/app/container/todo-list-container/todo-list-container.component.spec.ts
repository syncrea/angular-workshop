import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TodoListContainerComponent} from './todo-list-container.component';
import {TodoItemComponent} from '../../components/todo-item/todo-item.component';
import {By} from '@angular/platform-browser';
import {TodoItem} from '../../model/todo';
import {TodoService} from '../../service/todo.service';
import {RouterModule} from '@angular/router';
import {TodoListComponent} from '../../components/todo-list/todo-list.component';

class TodoServiceMock extends TodoService {
  todos: TodoItem[] = [{
    nr: '1',
    title: 'Todo 1',
    description: 'Todo 1 Description',
    done: true
  }, {
    nr: '2',
    title: 'Todo 2',
    description: 'Todo 2 Description',
    done: false
  }];

  getTodos() {
    return this.todos;
  }

  updateTodo(nr: string, data: any): void {
    const index = this.todos.findIndex((todo) => todo.nr === nr);
    if (index !== -1) {
      Object.assign(this.todos[index], data);
    }
  }
}

describe('TodoListContainer', () => {
  let component: TodoListContainerComponent;
  let fixture: ComponentFixture<TodoListContainerComponent>;
  let todoServiceMock: TodoServiceMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([], {
          useHash: true
        })
      ],
      declarations: [
        TodoListContainerComponent,
        TodoListComponent,
        TodoItemComponent
      ],
      providers: [{
        provide: TodoService,
        useClass: TodoServiceMock
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    todoServiceMock = fixture.componentRef.injector.get(TodoService);
  });

  it('should render two items', () => {
    const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
    expect(todoItems.length).toBe(2);
  });

  it('should update done state in service when item checkbox is clicked', () => {
    const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
    const secondTodoCheckbox = todoItems[1].query(By.css('.checkbox'));
    secondTodoCheckbox.triggerEventHandler('click', null);
    expect(todoServiceMock.todos[1].done).toBe(true);
  });

  it('should update done class on checkbox when item checkbox is clicked', () => {
    const todoItems = fixture.debugElement.queryAll(By.directive(TodoItemComponent));
    const secondTodoCheckbox = todoItems[1].query(By.css('.checkbox'));
    secondTodoCheckbox.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(secondTodoCheckbox.classes['checkbox-done']).toBe(true);
  });
});
