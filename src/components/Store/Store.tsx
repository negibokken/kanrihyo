import { createStore } from 'redux';
import { toggle } from '../Cell/Cell';

export type ReduxState = {
    counter: any ;
};

export type ReduxAction = any;

export function reducer(state: any, action: any): any {
  return state;
}

export const store: any = createStore(reducer, {todo: []});

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {}
  public toggleCellStatus(): void {
    this.dispatch(toggle());
  }
}

// http://developers.mobage.jp/blog/redux-basic
// 1. make action (type)
//     function addToDo(text) {
//        return {
//          type: 'ADD_TODO',
//          id: nextTodoId++,
//          text: text
//        }
//     }
// 2. make reducer
//    function reducer(state, action) {
//      switch(action.type) {
//        case 'ADD_TODO':
//          return {
//            todo: state.todo.concat({
//              id: action.id,
//              text: action.text,
//              completed: false,
//            })
//        };
//      }
//    }
