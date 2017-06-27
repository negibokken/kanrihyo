import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Cell from '../Cell/Cell';

interface IRowProps {
  rowcontents: string[];
  rownum: number;
};

interface IRowState {
};

export default class Row extends React.Component <IRowProps, IRowState> {
  constructor() {
    super();
  }

  setCells(): JSX.Element[] {
    const {rownum, rowcontents}: any = this.props;
    const cells: JSX.Element[] = [];
    this.props.rowcontents.map((cur, idx) => {
      cells.push (
        <Cell key={`row-${rownum}-col-${idx}`} rownum={rownum} colnum={idx} text={cur} input={false} />
      );
    });
    return cells;
  }

  render(): JSX.Element {
    return (
      <tr>
        {this.setCells()}
      </tr>
    );
  }
}

