import {TodoItem} from '../model/todo';
import {Action, createStore, Reducer} from '../util/store';

export interface AppState {
  todos: TodoItem[];
}

export const initialAppState: AppState = {
  todos: [{
    id: 1,
    title: 'Todo 1',
    description: 'Todo 1 Description',
    done: true
  }, {
    id: 2,
    title: 'Todo 2',
    description: 'Todo 2 Description',
    done: false
  }, {
    id: 3,
    title: 'Todo 3',
    description: 'Todo 3 Description',
    done: false
  }]
};

export class ToggleDoneAction implements Action {
  readonly type = 'ToggleDoneAction';

  constructor(public readonly todoId: number) {}
}

export class DeleteTodoAction implements Action {
  readonly type = 'DeleteTodoAction';

  constructor(public readonly todoId: number) {}
}

export type TodoActions = ToggleDoneAction | DeleteTodoAction;

export const appReducer: Reducer<AppState, TodoActions> = (state: AppState, action: TodoActions) => {
  switch (action.type) {
    case 'ToggleDoneAction':
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.todoId ? {...todo, done: !todo.done} : {...todo})
      };

    default: return state;
  }
};

export const store = createStore(appReducer, initialAppState);
