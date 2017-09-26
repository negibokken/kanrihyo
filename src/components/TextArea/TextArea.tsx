import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ActionDispatcher } from '../Store/Store';

interface TextAreaProps {
  description: string;
  actions: ActionDispatcher;
  rows: number;
  cols: number;
}

export class TextArea extends React.Component<TextAreaProps, {}> {
  constructor() {
    super();
  }

  onChange(e: any): any {
    this.props.actions.changeTextArea(e.target.value);
  }

  render(): any {
    const { rows, cols }: any = this.props;
    return (
      <textarea
        className="description"
        value={this.props.description}
        rows={rows}
        cols={cols}
        onChange={this.onChange.bind(this)}
        placeholder="キーワードを入力してください"
      />
    );
  }
}
