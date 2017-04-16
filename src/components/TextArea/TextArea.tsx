import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface ITextAreaProps {
  rows: number;
  cols: number;
};

interface ITextAreaState {
};

export default class TextArea extends React.Component <ITextAreaProps, ITextAreaState> {
  constructor(props: ITextAreaProps) {
    super(props);
  }

  _onChange(): any {
    // POST to DB
  }

  render(): any {
    const textStyle: any = {
      margin: '30px 0px'
    };
    const {rows, cols}: any = this.props;
    return (
      <div className='row' style={textStyle}>
        <textarea rows={rows} cols={cols} />
      </div>
    );
  }
}
