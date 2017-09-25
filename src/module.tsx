import { Action } from 'redux';

enum ActionNames {
  TOG = 'cell/toggle',
  RESET = 'cell/reset',
  CHANGE = 'cell/change',
}

export interface ToggleAction extends Action {
  type: ActionNames.TOG;
  rownum: number;
  colnum: number;
}

export const toggleCellStatus: any = (rownum: number, colnum: number): ToggleAction => ({
  type: ActionNames.TOG,
  rownum: rownum,
  colnum: colnum,
});

export interface ResetCellsAction {
  type: ActionNames.RESET;
}

export const resetCells: any = (): ResetCellsAction => ({
  type: ActionNames.RESET,
});

export interface ChangeTextAction extends Action {
  type: ActionNames.CHANGE;
  rownum: number;
  colnum: number;
  text: string;
}

export const changeText: any = (
  rownum: number,
  colnum: number,
  text: string,
): ChangeTextAction => ({
  type: ActionNames.CHANGE,
  rownum: rownum,
  colnum: colnum,
  text: text,
});

export type TableAction = ToggleAction | ResetCellsAction | ChangeTextAction;

export interface TableState {
  input: boolean[][];
  contents: string[][];
}

const initialState: TableState = {
  input: [[false, false, false, false], [false, false, false, false]],
  contents: [['ID', 'Title', 'Author', 'Date'], ['1', 'Test', 'taro', '2010/01/01']],
};

export default function reducer(state: TableState = initialState, action: TableAction): TableState {
  let input: boolean[][] = state.input.slice();
  let contents: string[][] = state.contents.slice();
  switch (action.type) {
    case ActionNames.TOG:
      input.map((rows, i) =>
        rows.map((col, j) => {
          input[i][j] = false;
        }),
      );
      input[action.rownum || 0][action.colnum || 0] = true;
      return Object.assign({}, state, { input });
    case ActionNames.RESET:
      state.input.forEach((rows, i) => {
        rows.map((col, j) => {
          input[i][j] = false;
        });
      });
      return Object.assign({}, state, { input });
    case ActionNames.CHANGE:
      contents[action.rownum][action.colnum] = action.text;
      return Object.assign({}, state, { contents });
    default:
      return state;
  }
}
