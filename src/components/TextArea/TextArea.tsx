import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface TextAreaProps {
  rows: number;
  cols: number;
}

export class TextArea extends React.Component<TextAreaProps, {}> {
  constructor() {
    super();
  }

  _onChange(): any {
    // POST to DB
  }

  render(): any {
    const { rows, cols }: any = this.props;
    return (
      <textarea
        className="description"
        rows={rows}
        cols={cols}
        placeholder="キーワードを入力してください"
      />
    );
  }
}
