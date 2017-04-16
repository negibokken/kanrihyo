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

  getStyle(): any {
    return {
      border: '1px solid #000'
    };
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
      this.props.input ?
        <input type='text' value={this.props.text} onChange={this.onChange.bind(this)}/> :
        <div>
          {this.props.text}
        </div>
    );
  }

  render(): JSX.Element {
    const {text, rownum, colnum}: any = this.props;
    return (
      rownum === 0 ?
      <th className={`row-${rownum}-column-${colnum}`} style={this.getStyle()} onClick={this.onClick.bind(this)}>{this.setInput()}</th> :
      <td className={`row-${rownum}-column-${colnum}`} style={this.getStyle()} onClick={this.onClick.bind(this)}>{this.setInput()}</td>
    );
  }
}

