import { combineReducers, createStore, Action } from 'redux';

import table, {
  changeText,
  changeTextArea,
  changeTitle,
  resetCells,
  resetTitle,
  toggleCellStatus,
  toggleTitleStatus,
  TableAction,
  TableState,
} from '../../module';

export default createStore(
  combineReducers({
    table,
  }),
);

export type ReduxState = {
  table: TableState;
};

export type ReduxAction = TableAction | Action;

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {
    this.dispatch = dispatch;
  }

  public toggle(rownum: number, colnum: number): void {
    this.dispatch(toggleCellStatus(rownum, colnum));
  }

  public reset(): void {
    this.dispatch(resetCells());
  }

  public change(rownum: number, colnum: number, text: string): void {
    this.dispatch(changeText(rownum, colnum, text));
  }

  public changeTitle(text: string): void {
    this.dispatch(changeTitle(text));
  }

  public toggleTitle(): void {
    this.dispatch(toggleTitleStatus());
  }

  public resetTitle(): void {
    this.dispatch(resetTitle());
  }

  public changeTextArea(text: string): void {
    this.dispatch(changeTextArea(text));
  }
}
