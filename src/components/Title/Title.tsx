import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ITitleProps {
  title: string;
};

interface ITitleState {
};

export default class Title extends React.Component <ITitleProps, ITitleState> {
  constructor() {
    super();
  }

  render(): JSX.Element {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}
