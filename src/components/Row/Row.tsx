import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Cell from '../Cell/Cell';
import { ActionDispatcher } from '../Table/Container';

interface RowProps {
  key: string;
  rowcontents: string[];
  rownum: number;
  actions?: ActionDispatcher;
}

export default class Row extends React.Component<RowProps, {}> {
  constructor() {
    super();
  }

  setCells(): JSX.Element[] {
    const { rownum, rowcontents }: any = this.props;
    const actions: any = this.props.actions;
    const cells: JSX.Element[] = [];
    this.props.rowcontents.map((cur, idx) => {
      cells.push(
        <Cell
          key={`row-${rownum}-col-${idx}`}
          rownum={rownum}
          colnum={idx}
          text={cur}
          actions={actions}
        />
      );
    });
    return cells;
  }

  render(): JSX.Element {
    return <tr>{this.setCells()}</tr>;
  }
}
