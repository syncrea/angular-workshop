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

export const appReducer: Reducer<AppState, Action> = (state: AppState, action: Action) => {
  return state;
};

export const store = createStore(appReducer, initialAppState);
