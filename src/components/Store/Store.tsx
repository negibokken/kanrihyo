import { combineReducers, createStore, Action } from 'redux';

import table, { toggleCellStatus, TableAction, TableState } from '../../module';

export default createStore(
  combineReducers({
    table
  })
);

export type ReduxState = {
  table: TableState;
};

export type ReduxAction = TableAction | Action;

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {
    this.dispatch = dispatch;
  }

  public toggle(rownum: number, colnum: number): any {
    this.dispatch(toggleCellStatus(rownum, colnum));
  }
}
