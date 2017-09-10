import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Row from '../Row/Row';
import { TableState } from './module';
import { ActionDispatcher } from './Container';

interface TableProps {
  value: TableState;
  actions: ActionDispatcher;
}

export class Table extends React.Component<TableProps, {}> {
  constructor() {
    super();
  }

  setBody(): JSX.Element[] {
    const contents: string[][] = this.props.value.contents;
    const actions: any = this.props.actions;
    const rows: JSX.Element[] = [];
    contents.map((con: string[], idx: number) => {
      if (idx !== 0) {
        rows.push(
          <Row
            key={`row-${idx}`}
            rownum={idx}
            rowcontents={con}
            input={this.props.value.input[idx]}
            actions={actions}
          />
        );
      }
    });
    return rows;
  }

  render(): JSX.Element {
    const contents: string[][] = this.props.value.contents;
    return (
      <table className="table">
        <thead>
          <Row key={'row-0'} rownum={0} rowcontents={contents[0]} />
        </thead>
        <tbody>{this.setBody()}</tbody>
      </table>
    );
  }
}
