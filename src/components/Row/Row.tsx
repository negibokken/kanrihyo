import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Cell from '../Cell/Cell';

interface IRowProps {
  key: string;
  rowcontents: string[];
  rownum: number;
};

interface IRowState {
};

export default class Row extends React.Component <IRowProps, {}> {
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

