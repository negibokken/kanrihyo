import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ActionDispatcher } from '../Table/Container';

interface CellProps {
  key: string;
  rownum: number;
  colnum: number;
  text: string;
  actions: ActionDispatcher;
}

export default class Cell extends React.Component<CellProps, {}> {
  constructor(props: CellProps) {
    super();
  }

  onDoubleClick(): any {
    console.log(this.props.rownum);
    console.log(this.props.colnum);
    this.props.actions.toggle(this.props.rownum, this.props.colnum);
  }

  onChange(): any {
    // pass dispatcher
  }

  setInput(): JSX.Element {
    return (
      <input
        type="text"
        value={this.props.text}
        onChange={this.onChange.bind(this)}
      />
    );
  }

  render(): JSX.Element {
    const input: boolean = false;
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
