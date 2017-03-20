import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Title} from './components/Title'

class Index extends React.Component <void, void> {
  constructor() {
    super();
  }

  render(): any {
    return (
      <div>
        <Title />
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('index')
);
