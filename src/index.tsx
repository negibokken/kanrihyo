import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {store} from './components/Store/Store';
import {Table} from './components/Table/Table';
import TextArea from './components/TextArea/TextArea';
import Title from './components/Title/Title';

interface IndexProps {}

class Index extends React.Component <any, {}> {
  constructor() {
    super();
  }

  getTable(): any[] {
    const row: any[] = [];
    for (let i: number = 1; i < 7; i++) {
      row.push([i, 'aaa', 'bbb', 'cccc']);
    }
    return row;
  }

  isTop(): boolean {
    return false;
  }

  render(): JSX.Element {
    if (this.isTop()) {
      return (
        <div>
          <input className='main-input' />
          <button type='submit'>Create</button>
        </div>
      );
    } else {
      console.log(store.getState());
      return (
        <div>
          <Title key='title' title='title' />
          <TextArea key='textarea' rows={4} cols={80} />
          <Table key='table' contents={this.getTable()} />
        </div>
      );
    }
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('index')
);
