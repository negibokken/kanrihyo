import { ReduxAction, ReduxState } from '../Store/Store';
import { toggleCellStatus } from './module';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Table } from '../Table/Table';

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {
    this.dispatch = dispatch;
  }

  public toggle(rownum: number, colnum: number): any {
    this.dispatch(toggleCellStatus(rownum, colnum));
  }
}

export default connect(
  (state: ReduxState) => {
    return { value: state.table };
  },
  (dispatch: Dispatch<ReduxAction>) => {
    return { actions: new ActionDispatcher(dispatch) };
  }
)(Table);
