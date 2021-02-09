import {Component} from "react";
import Tags from "./Tags";
import Cards from "./Cards";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton : "all"
    }
  }
  handleClick = ({target}) => {
    if(target.tagName==="LI") {
      let {id} = target.dataset;
      this.setState({
        activeButton : id
      })
    }
  }
  render() {
    return (
      <section className="container">
        <Tags
          activeButton={this.state.activeButton}
          handleClick={this.handleClick}/>
        <Cards activeButton={this.state.activeButton} />
      </section>
    )
  }
}

export default App;