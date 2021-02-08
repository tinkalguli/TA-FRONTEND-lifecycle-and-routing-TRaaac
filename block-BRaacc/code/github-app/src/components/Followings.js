import {Component} from "react";
import {Link} from "react-router-dom";

export default class Followings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followings : null
    }
  }
  componentDidMount() {
    let url = this.props.url;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          followings : res
        })
      })
  }
  render() {
    let followings = this.state.followings;

    if(!followings) {
      return <h1>Loading...</h1>
    }
    return (
      <section className="container">
        <h2 className="heading">Followed by {this.props.username}</h2>
        {
          followings.map(user => (
            <Link
              key={user?.id}
              className="link"
              to={`/users/${user?.login}`}>
              {user?.login}</Link>
          ))
        }
      </section>
    )
  }
}