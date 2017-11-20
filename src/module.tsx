import { Action } from 'redux';

enum ActionNames {
  TOG = 'cell/toggle',
  RESET = 'cell/reset',
  CHANGE = 'cell/change',
  CHANGE_TEXTAREA = 'textarea/change',
  CHANGE_TITLE = 'title/change',
  RESET_TITLE = 'title/reset',
  TOG_TITLE = 'title/toggle',
  ADD_ROW = 'button/add',
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

export interface ToggleTitleAction extends Action {
  type: ActionNames.TOG_TITLE;
}

export const toggleTitleStatus: any = (rownum: number, colnum: number): ToggleTitleAction => ({
  type: ActionNames.TOG_TITLE,
});

export interface ChangeTitleAction extends Action {
  type: ActionNames.CHANGE_TITLE;
  text: string;
}

export const changeTitle: any = (text: string): ChangeTitleAction => ({
  type: ActionNames.CHANGE_TITLE,
  text: text,
});

export interface ChangeTextAreaAction extends Action {
  type: ActionNames.CHANGE_TEXTAREA;
  text: string;
}

export const changeTextArea: any = (text: string): ChangeTextAreaAction => ({
  type: ActionNames.CHANGE_TEXTAREA,
  text: text,
});

export interface ResetTitleAction extends Action {
  type: ActionNames.RESET_TITLE;
}

export const resetTitle: any = (): ResetTitleAction => ({
  type: ActionNames.RESET_TITLE,
});

export interface AddRowAction extends Action {
  type: ActionNames.ADD_ROW;
}

export const addRow: any = (): AddRowAction => ({
  type: ActionNames.ADD_ROW,
});

export type TableAction =
  | ToggleAction
  | ToggleTitleAction
  | ResetCellsAction
  | ChangeTextAction
  | ChangeTextAreaAction
  | ChangeTitleAction
  | ResetTitleAction
  | AddRowAction;

export interface TableState {
  title: string;
  titleInput: boolean;
  description: string;
  input: boolean[][];
  contents: string[][];
}

const initialState: TableState = {
  title: 'Sample title',
  titleInput: false,
  description: '',
  input: [
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
  ],
  contents: [
    ['ID', 'タイプ', '著書名', '借りている人', '借りた日', '返却予定日'],
    ['1', 'プログラミング', 'funny book', 'hkt', '2010/01/01', '2022/12/1'],
    ['2', 'プログラミング', 'fun book', 'hkt', '2010/01/01', '2022/12/1'],
  ],
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
      // ここにPOSTを追加する
      contents[action.rownum][action.colnum] = action.text;
      return Object.assign({}, state, { contents });
    case ActionNames.TOG_TITLE:
      return Object.assign({}, state, { titleInput: !state.titleInput });
    case ActionNames.CHANGE_TITLE:
      // ここにPOSTを追加する
      return Object.assign({}, state, { title: action.text });
    case ActionNames.RESET_TITLE:
      return Object.assign({}, state, { titleInput: false });
    case ActionNames.CHANGE_TEXTAREA:
      // ここにPOSTを追加する
      return Object.assign({}, state, { description: action.text });
    case ActionNames.ADD_ROW:
      // ここにPOSTを追加する
      const colnum: number = state.contents[0].length;
      const emptyContent: string[] = Array.apply(null, new Array(colnum)).map(
        String.prototype.valueOf,
        'Empty',
      );
      const emptyInput: boolean[] = Array.apply(null, new Array(colnum)).map(
        Boolean.prototype.valueOf,
        false,
      );

      state.contents.push(emptyContent);
      state.input.push(emptyInput);

      return Object.assign({}, state, { contents: state.contents, input: state.input });
    default:
      return state;
  }
}
