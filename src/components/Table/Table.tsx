import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Row from '../Row/Row';
import {TableState} from './module';
import {ActionDispatcher} from './Countainer';

interface TableProps {
  value: TableState;
  actions: ActionDispatcher;
};

// export class Table extends React.Component <TableProps, {}> {
export class Table extends React.Component <TableProps, {}> {
  constructor() {

    super();
  }

  // setBody(): JSX.Element[] {
  //   const contents: any = this.props;
  //   const rows: JSX.Element[] = [];
  //   this.props.contents.map((cur: string[], idx: number) => {
  //     if (idx !== 0) {
  //       rows.push (
  //         <Row key={`row-${idx}`} rownum={idx} rowcontents={cur} />
  //       );
  //     }
  //   });
  //   return rows;
  // }

  onClick(): void {
    this.props.actions.toggle();
  }

  render(): JSX.Element {
    return (
      <div onClick={this.onClick.bind(this)}>あ{this.props.value.input.toString()}あ</div>
    );
  }
  // render(): JSX.Element {
  //   return (
  //     <table className='table'>
  //       <thead>
  //         <Row key={`row-0`} rownum={0} rowcontents={this.props.contents[0]} />
  //       </thead>
  //       <tbody>
  //         {this.setBody()}
  //       </tbody>
  //     </table>
  //   );
  // }
}
