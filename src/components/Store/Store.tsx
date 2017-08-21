import { createStore } from 'redux';

export function reducer(state: any, action: any): any {
  return state;
}

export const store: any = createStore(reducer, {todo: []});
