import * as $ from 'jquery';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ICellProps {
  rownum: number;
  colnum: number;
  text: string;
};

interface ICellState {
};

export class Cell extends React.Component <ICellProps, ICellState> {
  constructor() {
    super();
  }

    getStyle(): any {
    return {
      border: '1px solid #000'
    };
  }

  // returnTd(): any {
  //   const {text, rownum, colnum}: any = this.props;
  //   return(
  //     <td style={this.getStyle()} onDoubleClick={this.onDoubleClick.bind(this)}> {text}> </td>
  //   );
  // }

  // onDoubleClick(e: any): void {
  //   const returnTd: Function = this.returnTd.bind(this);
  //   const {text, rownum, colnum}: any = this.props;
  //   const selector: string = `[class=row-${rownum}-column-${colnum}]`;
  //   $(selector)
  //     .replaceWith(function(): JQuery {
  //       const tag_class: string = $(this).attr('class');
  //       const input: HTMLInputElement = document.createElement('input');
  //       const td: HTMLTableDataCellElement = document.createElement('td');
  //       input.value = document.querySelector(selector).textContent;
  //       input.className = tag_class;
  //       input.onblur = function(): void {
  //         const targetTd: any = document.querySelector(selector);
  //       };
  //       return $(this).replaceWith(input);
  //     });
  // }

  render(): JSX.Element {
    const {text, rownum, colnum}: any = this.props;
    return (
      rownum === 0 ?
      <th className={`row-${rownum}-column-${colnum}`} style={this.getStyle()}>{text}</th> :
      <td className={`row-${rownum}-column-${colnum}`} style={this.getStyle()}>{text}</td>
    );
  }
}

