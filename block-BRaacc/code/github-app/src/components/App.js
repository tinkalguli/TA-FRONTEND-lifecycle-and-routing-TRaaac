import {Component} from "react";
import {Link} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : ""
    }
  }
  handleChange = ({target}) => {
    let {value} = target;
    this.setState({
      username : value
    })
  }
  render() {
    return (
      <section className="main-sec">
        <h1 className="main-heading">Enter a github username</h1>
        <form>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}/>
          <Link className="btn" to={`/users/${this.state.username}`}>
            Search
          </Link>
        </form>
      </section>
    )
  }
}

export default App;