import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Table from './components/Table/Table';
import TextArea from './components/TextArea/TextArea';
import Title from './components/Title/Title';

class Index extends React.Component <void, void> {
  constructor() {
    super();
  }

  getTable(): any {
    const row: any[] = [];
    for (let i: number = 1; i < 50; i++) {
      row.push([i, 'aaa', 'aaa', 'bbb', 'ccc', 'dddd', 'eee']);
    }
    return row;
  }

  isTop(): boolean {
    return false;
  }

  returnElement(): JSX.Element {
    if (this.isTop()) {
      return (
        <div style={{margin: 'auto', position: 'relative', width: '100%'}}>
          <input className='main-input' />
          <button type='submit'>Create</button>
        </div>
      );
    } else {
      return (
        <div>
          <Title title='title' />
          <TextArea rows={4} cols={80} />
          <Table contents={this.getTable()} />
        </div>
      );
    }
  }


  render(): JSX.Element {
    return (
      <div style={{width: '100%'}}>
        {this.returnElement()}
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('index')
);
