import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ActionDispatcher } from '../Store/Store';

interface ButtonProps {
  actions: ActionDispatcher;
}

export class AddButton extends React.Component<ButtonProps, {}> {
  constructor() {
    super();
  }

  onClick(): void {
    this.props.actions.addRow();
  }

  render(): JSX.Element {
    return <button onClick={this.onClick.bind(this)}>Add</button>;
  }
}
