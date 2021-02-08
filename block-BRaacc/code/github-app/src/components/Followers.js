import {Component} from "react";
import {Link} from "react-router-dom";

export default class Followers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers : null
    }
  }
  componentDidMount() {
    let url = this.props.url;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          followers : res
        })
      })
  }
  render() {
    let followers = this.state.followers;

    if(!followers) {
      return <h1>Loading...</h1>
    }
    return (
      <section className="container">
        <h2 className="heading">Followers of {this.props.username}</h2>
        {
          followers.map(follower => (
            <Link
              key={follower?.id}
              className="link"
              to={`/users/${follower?.login}`}>
              {follower?.login}</Link>
          ))
        }
      </section>
    )
  }
}