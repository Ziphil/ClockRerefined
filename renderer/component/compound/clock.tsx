//

import * as react from "react";
import {
  ReactNode
} from "react";
import {
  Calendar
} from "../../module/calendar";
import {
  Component
} from "../component";
import {
  Letter
} from "./";


export class Clock extends Component<Props, State> {

  public render(): ReactNode {
    let calendar = this.props.calendar;
    let node = (
      <div className="clock-root">
        <div className="date-wrapper">
          <div className="date">
            <Letter content={calendar.year} length={4} size="small"/>
            <Letter content="/" size="small"/>
            <Letter content={calendar.month} length={2} size="small"/>
            <Letter content="/" size="small"/>
            <Letter content={calendar.day} length={2} size="small"/>
          </div>
          <div className="hairia">
            <Letter content={calendar.hairia} length={4} size="small"/>
          </div>
        </div>
        <div className="time">
          <Letter content={calendar.hour} length={2}/>
          <Letter content=":"/>
          <Letter content={calendar.minute} length={2}/>
          <Letter content=":"/>
          <Letter content={calendar.second} length={2}/>
        </div>
      </div>
    );
    return node;
  }

}


type Props = {
  calendar: Calendar
};
type State = {
};