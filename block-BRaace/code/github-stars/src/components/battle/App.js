import {Component} from "react";
import Playground from "./Playground";
import Result from "./Result";
import "dot-env";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPlayer : null,
      secondPlayer : null,
      isPlayed : false,
      winner : null
    }
    this.baseState = this.state;
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const {value, name} = event.target[0];
    fetch(`https://api.github.com/users/${value}?authorized-request=${process.env.TOKEN}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          [name] : res
        })
      })
  }
  handleCancel = (event) => {
    event.preventDefault();
    const {name} = event.target;
    this.setState({
      [name] : null
    })
  }
  playBattle = () => {
    const {firstPlayer, secondPlayer } = this.state;
    const firstPlayerScore = playerScoreCount(firstPlayer);
    const secondPlayerScore = playerScoreCount(secondPlayer);
    
    let winner;
    switch(true) {
      case firstPlayerScore > secondPlayerScore:
        winner=firstPlayer.login;
        break;
      case secondPlayerScore > firstPlayerScore:
        winner=secondPlayer.login;
        break;
      default:
        winner="match";
        break;
    }
    
    this.setState(({isPlayed}) => ({
      winner:winner,
      isPlayed : !isPlayed
    }))
  }
  handleReset = () => {
    this.setState({...this.baseState});
  }
  render() {
    const {isPlayed, winner, firstPlayer, secondPlayer} = this.state;
    return (
      <section className="container center-text">
        {
          isPlayed
          ? <Result
              handleReset={this.handleReset}
              winner={winner}
              players={[firstPlayer, secondPlayer]}
            />
          : <Playground
              playBattle={this.playBattle}
              handleSubmit={this.handleSubmit}
              handleCancel={this.handleCancel}
              players={{firstPlayer, secondPlayer}}
            />
        }
      </section>
    )
  }
}

function playerScoreCount(player) {
  return (
    player?.followers + player?.following + player?.public_repos
  );
}

export default App;