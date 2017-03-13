import * as React from 'react';

export class Test extends React.Component <any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      message: 'test'
    };
  }
  render (): any {
    return (
      <div className='kusa'>
        {this.state.message}
      </div>
    );
  }
}
