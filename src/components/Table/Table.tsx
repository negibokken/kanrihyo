import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TableState } from '../../module';
import Row from '../Row/Row';
import { ActionDispatcher } from '../Store/Store';

interface TableProps {
  value: TableState;
  actions: ActionDispatcher;
}

export class Table extends React.Component<TableProps, {}> {
  constructor() {
    super();
  }

  componentDidMount(): void {
    addEventListener('keyup', e => {
      if (e.key === 'Escape') {
        this.props.actions.reset();
      }
    });
    addEventListener('click', e => {
      const targets: string[] = ['TABLE', 'THEAD', 'TH', 'TR', 'TD', 'TBODY', 'INPUT'];
      if (this.props.value.titleInput === true) {
        this.props.actions.resetTitle();
      }
      // escape if click at not table  elements
      if (!!!targets.find((t: string) => t === e.toElement.nodeName)) {
        this.props.actions.reset();
      }
    });
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
          />,
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
