import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Test} from './components/Test';

class Clock extends React.Component <any, any> {
  constructor(props: any) {
    super(props);
    const currentTime: Date = new Date();
    this.state = {
          hours: currentTime.getHours(),
          minutes: currentTime.getMinutes(),
          seconds: currentTime.getSeconds(),
          ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
    };
    this.setTimer();
  }

  setTimer(): void {
    setTimeout(this.updateClock.bind(this), 1000);
  }

  updateClock(): void {
    const currentTime: Date = new Date();
    this.setState(
      {
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
        ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
      },
      this.setTimer);
  }

  render(): any {
    const {hours, minutes, seconds, ampm}: any = this.state;
    return (
      <div>
        <Test />
        <div className='clock'>
          {
            hours === 0 ? 12 :
              (hours > 12) ?
                hours - 12 : hours
          }:{
            minutes > 9 ? minutes : `0${minutes}`
          }:{
            seconds > 9 ? seconds : `0${seconds}`
          } {ampm}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('example')
);
