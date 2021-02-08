import {Component} from "react";

export default class PublicRepos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos : null
    }
  }
  componentDidMount() {
    let url = this.props.url;

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          repos : res
        })
      })
  }
  render() {
    let repos = this.state.repos;

    if(!repos) {
      return <h1>Loading...</h1>
    }
    return (
      <section className="container">
        <h2 className="heading">Repos of {this.props.username}</h2>
        {
          repos.map(repo => (
            <a
              key={repo?.id}
              className="link"
              target="_blank"
              rel="noreferrer"
              href={repo?.html_url}>{repo?.full_name} | {repo?.stargazers_count}⭐️</a>
          ))
        }
      </section>
    )
  }
}