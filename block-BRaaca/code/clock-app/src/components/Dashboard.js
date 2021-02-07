import {Component} from "react";
import data from "../data.json";
import Clock from "./Clock";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clockCount : 3,
      clocksData : data.filter(val => val.id <= 3)
    }
  }
  increaseClockCount = () => {
    this.setState(({clockCount}) => ({
      clockCount : clockCount + 1
    }), (clockCount) => {
      this.changeClockStatus(clockCount)
    })
  }
  decreaseClockCount = () => {
    this.setState(({clockCount}) => ({
      clockCount : clockCount - 1
    }), (clockCount) => {
      this.changeClockStatus(clockCount)
    })
  }
  changeClockStatus = (count) => {
    let clocksData = data.map(clock => {
      if(clock.id > this.state.clockCount) {
        return {...clock, enabled : false}
      }
      return clock;
    })
    this.setState({clocksData})
  }
  render() {
    let clocksData = this.state.clocksData;
    return(
      <section className="container flex-between">
        <button
          onClick={this.decreaseClockCount}
          id={this.state.clockCount === 1 ? "disable" : ""}
          className="btn">
            -
        </button>
        <ul>
          {
            clocksData.map(clock => {
              return clock.enabled
              ? <Clock key={clock.id} clock={clock} />
              : ""
            })
          }
        </ul>
        <button
          onClick={this.increaseClockCount}
          id={this.state.clockCount === 6 ? "disable" : ""}
          className="btn">
            +
        </button>
      </section>
    )
  }
}