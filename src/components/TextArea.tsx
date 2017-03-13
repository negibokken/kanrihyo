import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Textarea from 'react-textarea-autosize';

class DescriptionArea extends React.Component <any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      description: 'Eneter explanation of this table'
    };
  }

  _onChange(): any {
    // POST to DB
  }

  render(): any {
    const textStyle: any = {
      margin: '30px 0px'
    };
    return (
      <div style={textStyle}>
        <Textarea
          rows={3}
          cols={100}
          defaultValue={this.state.description}
          onChange={this._onChange.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(
  <DescriptionArea />,
  document.getElementById('description-area')
);
