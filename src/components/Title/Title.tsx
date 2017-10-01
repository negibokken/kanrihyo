import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ActionDispatcher } from '../Store/Store';

interface TitleProps {
  key: string;
  title: string;
  input: boolean;
  actions: ActionDispatcher;
}

export class Title extends React.Component<TitleProps, {}> {
  constructor() {
    super();
  }

  componentDidMount(): void {
    addEventListener('keyup', e => {
      if (e.key === 'Escape') {
        this.props.actions.resetTitle();
      }
    });
  }

  onDoubleClick(): void {
    this.props.actions.toggleTitle();
  }

  onChange(e: any): void {
    this.props.actions.changeTitle(e.target.value);
  }

  setInput(): JSX.Element {
    return (
      <input
        className="heading"
        type="text"
        value={this.props.title}
        onChange={this.onChange.bind(this)}
      />
    );
  }

  render(): JSX.Element {
    const { title, input }: any = this.props;
    return (
      <h1 className="heading" onDoubleClick={this.onDoubleClick.bind(this)}>
        {input ? this.setInput() : title}
      </h1>
    );
  }
}
