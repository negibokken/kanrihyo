import {combineReducers, createStore,  Action} from 'redux';
import {TableAction, TableState} from '../Table/module';
import toggle from '../Table/module';

export default createStore(
  combineReducers({
    toggle,
  })
);

export type ReduxState = {
  table: TableState;
};

export type ReduxAction = TableAction | Action;
