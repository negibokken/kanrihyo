import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ActionDispatcher } from '../Store/Store';

interface CellProps {
  key: string;
  rownum: number;
  colnum: number;
  text: string;
  input?: boolean;
  actions: ActionDispatcher;
}

export default class Cell extends React.Component<CellProps, {}> {
  constructor(props: CellProps) {
    super();
  }

  onDoubleClick(): any {
    if (this.props.actions !== undefined) {
      this.props.actions.toggle(this.props.rownum, this.props.colnum);
    }
  }

  onChange(e: any): any {
    const { rownum, colnum }: any = this.props;
    this.props.actions.change(rownum, colnum, e.target.value);
  }

  setInput(): JSX.Element {
    return <input type="text" value={this.props.text} onChange={this.onChange.bind(this)} />;
  }

  render(): JSX.Element {
    const input: boolean = this.props.input || false;
    const { text, rownum, colnum }: any = this.props;
    return rownum === 0 ? (
      <th className="row-th" onDoubleClick={this.onDoubleClick.bind(this)}>
        {input ? this.setInput() : text}
      </th>
    ) : (
      <td className="row-td" onDoubleClick={this.onDoubleClick.bind(this)}>
        {input ? this.setInput() : text}
      </td>
    );
  }
}

export function toggle(): void {
  return;
}
