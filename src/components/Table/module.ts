import {Action} from 'redux';

enum ActionNames {
  TOG = 'cell/toggle',
};

interface ToggleAction extends Action {
  type: ActionNames.TOG;
}

export const toggleCellStatus = (): ToggleAction => ({
  type: ActionNames.TOG,
});

export type TableAction = ToggleAction;

export interface TableState {
  input: boolean;
};

const initialState: TableState = {
  input: false,
};

export default function reducer(state: TableState = initialState, action: TableAction): TableState {
  switch(action.type) {
    case ActionNames.TOG:
      return Object.assign({}, state, {input: !state.input});
    default:
      return state;
  }
}
