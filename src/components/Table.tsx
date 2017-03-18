import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as update from 'react-addons-update';

import * as $ from 'jquery';
import * as ReactDataGrid from 'react-data-grid';

class MyTable extends React.Component < any, any > {
  constructor(props : any) {
    super(props);
    this.state = {
      columns: [
        {
          key: 'id',
          name: 'ID',
          width: 80
        }, {
          key: 'item',
          name: 'Item',
          editable: true
        }, {
          key: 'manager',
          name: 'Manager',
          editable: false
        }, {
          key: 'borrower',
          name: 'Borrower',
          editable: true
        }, {
          key: 'email',
          name: 'Email',
          editable: true
        }, {
          key: 'returnDate',
          name: 'Return Date',
          editable: false
        }
      ],
      rows: this.createRows(15)
    };
  }

  rowGetter(i : number) : any { return this.state.rows[i]; }

  createRows(numberOfRows : number) : any {
    const rows: any[] = [];
    for (let i : number = 1; i <= numberOfRows; i++) {
      rows.push({
        id: i,
        item: `Item${i}`,
        manager: `Manager${i}`,
        borrower: `user${i}`,
        email: `test${i}@example.com`,
        returnDate: '2017年3月12日'
      });
    }
    return rows;
  }

  handleGridRowsUpdated({fromRow, toRow, updated} : any) : any {
    const rows: any[] = this.state.rows.slice();
    for (let i : number = fromRow; i <= toRow; i++) {
      const rowToUpdate : any = rows[i];
      const updatedRow : any = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }
    this.setState({rows});
  }

  onMouseOver() : any {
    let test: any = document.getElementById('test');
    test.style.color = "red";
  }

  onMouseOut() : any {
    let test: any = document.getElementById('test');
    test.style.color = "black";
  }

  render() : any {return(
      <div id="test" onMouseOver={this.onMouseOver.bind(this)} onMouseOut={this.onMouseOut.bind(this)}>
        <ReactDataGrid
          enableCellSelect={true}
          columns={this.state.columns}
          rowGetter={this.rowGetter.bind(this)}
          rowsCount={this.state.rows.length}
          minHeight={400}
          onGridRowsUpdated={this.handleGridRowsUpdated.bind(this)}/>
      </div>
    );}
}

ReactDOM.render(
  <MyTable/>, document.getElementById('mytable'));
