import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Row from '../Row/Row';

type Content = any;

interface ITableProps {
  contents: Content[];
};

interface ITableState {
};

export class Table extends React.Component <any, {}> {
  constructor(props: ITableProps) {
    super();
  }

  setBody(): JSX.Element[] {
    const contents: any = this.props;
    const rows: JSX.Element[] = [];
    // console.log(this.props.contents);
    this.props.contents.map((cur: string[], idx: number) => {
      if (idx !== 0) {
        rows.push (
          <Row key={`row-${idx}`} rownum={idx} rowcontents={cur} />
        );
      }
    });
    return rows;
  }

  // getStyle(): React.CSSProperties {
  //   return{
  //     width: '100%',
  //     border: '1px solid #000',
  //     borderCollapse: 'collapse'
  //   };
  // }

  render(): JSX.Element {
    return (
      <table className='table'>
        <thead>
          <Row key={`row-0`} rownum={0} rowcontents={this.props.contents[0]} />
        </thead>
        <tbody>
          {this.setBody()}
        </tbody>
      </table>
    );
  }
}
