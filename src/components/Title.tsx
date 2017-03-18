import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface TitleState {
  title: string;
};

export class Title extends React.Component <void, TitleState> {
  constructor() {
    super();
    this.state = {
      title: this.getTitle()
    }
  }

  getTitle() {
    // Request to Server
    return 'default title';
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}
