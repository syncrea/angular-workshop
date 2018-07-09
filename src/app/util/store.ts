import {BehaviorSubject, from, Observable, timer} from 'rxjs';
import {map, distinctUntilChanged, skipWhile, zip} from 'rxjs/operators';

export interface Action {
  type: string;
}

export type Reducer<S, A extends Action> = (state: S, action: A) => S;
export type Select<S, R> = (selector: (state: S) => R) => Observable<R>;

export interface Store<S, A extends Action> {
  select: Select<S, any>;
  dispatch: (action: A) => void;
  replayHistory: (interval: number) => void;
}

export function createStore<S, A extends Action>(
  reducer: Reducer<S, A>,
  initialState?: S
): Store<S, A> {

  const changes = new BehaviorSubject<S>(initialState || <S>{});
  const history: S[] = [];
  changes.subscribe(state => history.push(state));

  return {
    select: selector => changes.asObservable()
      .pipe(
        map(selector),
        distinctUntilChanged(),
        skipWhile(value => value === null || value === undefined)
      ),
    dispatch: action => changes
      .next(reducer(changes.getValue(), action)),
    replayHistory: interval =>
      from(history).pipe(
        zip(timer(0, interval), state => state)
      ).subscribe(state => changes.next(state))
  };
}
