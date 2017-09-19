import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Dispatch } from 'redux';

import store, {
  ActionDispatcher,
  ReduxAction,
  ReduxState
} from './components/Store/Store';
import { Table } from './components/Table/Table';
import { TextArea } from './components/TextArea/TextArea';
import { Title } from './components/Title/Title';
import { TableState } from './module';

interface IndexProps {
  value: any;
  actions: any;
}

export class Index extends React.Component<IndexProps, any> {
  constructor() {
    super();
  }

  isTop(): boolean {
    return false;
  }

  render(): JSX.Element {
    if (this.isTop()) {
      return (
        <div>
          <input className="main-input" />
          <button type="submit">Create</button>
        </div>
      );
    } else {
      return (
        <div>
          <Title key="title" title="title" />
          <TextArea key="textarea" rows={4} cols={80} />
          <Table {...this.props} />
        </div>
      );
    }
  }
}

const Countainer: any = connect(
  (state: ReduxState) => {
    return { value: state.table };
  },
  (dispatch: Dispatch<ReduxAction>) => {
    return { actions: new ActionDispatcher(dispatch) };
  }
)(Index);

ReactDOM.render(
  <Provider store={store}>
    <Countainer />
  </Provider>,
  document.getElementById('index')
);
