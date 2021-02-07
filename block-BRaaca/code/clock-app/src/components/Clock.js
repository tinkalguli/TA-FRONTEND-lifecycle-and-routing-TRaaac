import {Component} from "react";
import MomentTimeZone from "moment-timezone";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time : new Date()
    };
    this.timer = null;
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ time : new Date() })
      console.log("clock")
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return(
      <li className="clock">
        <h3>{this.props.clock.city}</h3>
        <h2>
          {
            MomentTimeZone.tz(
              this.state.time,
              this.props.clock.tz
            ).format("LTS")
          }
        </h2>
      </li>
    )
  }
}