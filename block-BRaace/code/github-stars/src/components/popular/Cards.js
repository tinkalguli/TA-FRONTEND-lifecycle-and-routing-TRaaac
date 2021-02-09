import {Component} from "react";

export default class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : null,
    }
  }
  fetchData = (id) => {
    fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${id}&sort=stars&order=desc&type=Repositories`)
      .then(res => res.json())
      .then(res => {
        const data = res.items.filter((_, i)=> i <= 20);
        this.setState({
          data : data,
        })
      })
  }
  componentDidMount() {
    const id = this.props.activeButton;
    this.fetchData(id);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.activeButton !== this.props.activeButton) {
      this.setState({data:null})
      this.fetchData(this.props.activeButton);
    }
  }
  render() {
    let data = this.state.data;

    if(!data) {
      return <h1>Loading...</h1>
    }

    return (
      <section className="repo-cards flex-between">
        {
          data.map((repo, i) => (
            <article key={repo.id} className="repo-card">
              <h2>#{i}</h2>
              <img src={repo.owner.avatar_url} alt="owner avatar"/>
              <h3>{repo.owner.login}</h3>
              <ul className="repo-extra-info">
                <li>{repo.name}</li>
                <li>{repo.stargazers_count} Stars</li>
                <li>{repo.forks_count} Forks</li>
                <li>{repo.open_issues_count} Open issues</li>
              </ul>
            </article>
          ))
        }
      </section>
    )
  }
}