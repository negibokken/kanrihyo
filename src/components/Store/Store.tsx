import { combineReducers, createStore, Action } from 'redux';
import { TableAction, TableState } from '../Table/module';
import table from '../Table/module';

export default createStore(
  combineReducers({
    table
  })
);

export type ReduxState = {
  table: TableState;
};

export type ReduxAction = TableAction | Action;
