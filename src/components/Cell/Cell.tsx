import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ICellProps {
  rownum: number;
  colnum: number;
  text: string;
  input: boolean;
};

interface ICellState {
};

export default class Cell extends React.Component <ICellProps, ICellState> {
  constructor(props: ICellProps) {
    super();
  }

  onClick(): any {
    console.log(this.props.rownum);
    console.log(this.props.colnum);
  }

  onChange(): any {
    // pass dispatcher
  }

  setInput(): JSX.Element {
    return (
        <input type='text' value={this.props.text} onChange={this.onChange.bind(this)}/>
    );
  }

  render(): JSX.Element {
    const {input, text, rownum, colnum}: any = this.props;
    return (
      rownum === 0 ?
      <th className='row-th' onClick={this.onClick.bind(this)}>{input ? this.setInput() : text}</th> :
      <td className='row-td' onClick={this.onClick.bind(this)}>{input ? this.setInput() : text}</td>
    );
  }
}

