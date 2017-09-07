import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface TitleProps {
  title: string;
};

export class Title extends React.Component <TitleProps, {}> {
  constructor() {
    super();
  }

  render(): JSX.Element {
    return (
      <h1 className='heading'>{this.props.title}</h1>
    );
  }
}
