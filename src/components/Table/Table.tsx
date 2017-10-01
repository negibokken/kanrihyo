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
      if (e.toElement.className !== 'heading' || e.toElement.nodeName !== 'INPUT') {
        this.props.actions.resetTitle();
      }
      // escape if click at not table  elements
      if (!!!targets.find((t: string) => t === e.toElement.nodeName)) {
        this.props.actions.reset();
      }
    });
    // reset input mode on Enter
    let onComposition: boolean = false;
    let compositted: boolean = false;
    let enternum: number = 0;
    addEventListener('keyup', e => {
      if (onComposition) {
        return;
      }
      // Return if not enter
      if (e.keyCode !== 13) {
        return;
      }

      // Ignore IME Enter
      if (compositted && enternum === 0) {
        enternum++;
        return;
      }
      compositted = false;
      enternum = 0;
      this.props.actions.reset();
      this.props.actions.resetTitle();
    });
    addEventListener('compositionstart', () => {
      onComposition = true;
      compositted = false;
    });
    addEventListener('compositionend', () => {
      onComposition = false;
      compositted = true;
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
