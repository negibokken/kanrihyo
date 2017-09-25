import { Action } from 'redux';

enum ActionNames {
  TOG = 'cell/toggle',
  RESET = 'cell/reset',
}

export interface ToggleAction extends Action {
  type: ActionNames.TOG;
  rownum?: number;
  colnum?: number;
}

export const toggleCellStatus: any = (rownum: number, colnum: number): ToggleAction => ({
  type: ActionNames.TOG,
  rownum: rownum,
  colnum: colnum,
});

export interface ResetCells {
  type: ActionNames.RESET;
}

export const resetCells: any = (): ResetCells => ({
  type: ActionNames.RESET,
});

export type TableAction = ToggleAction | ResetCells;

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
  switch (action.type) {
    case ActionNames.TOG:
      console.log(state);
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
    default:
      return state;
  }
}
