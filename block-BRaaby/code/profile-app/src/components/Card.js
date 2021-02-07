import {Component} from "react";

export default class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : null,
      activeIcon : "name",
      isFetching : false
    }
  }
  componentDidMount() {
    this.handleData();
  }
  handleData = () => {
    this.setState({
      isFetching : true
    })
    fetch("https://randomuser.me/api/")
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          data : res.results[0],
          isFetching : false
        })
    })
  }
  handleClick = () => {
    this.handleData();
    this.setState({
      activeIcon : "name"
    })
  }
  handleHover = (icon) => {
    this.setState({
      activeIcon : icon
    })
  }
  info = (activeIcon) => {
    const data = this.state.data;
    switch(activeIcon) {
      case "name" :
        return `${data?.name?.first} ${data?.name?.last}`;
      case "email" :
        return `${data?.email}`;
      case "age" :
        return `${data?.dob?.age}`;
      case "street" :
        return `${data?.location?.street.number} 
          ${data?.location?.street.name}`;
      case "phone" :
        return `${data?.phone}`;
      case "password" :
        return `${data?.login?.password}`;
      default :
        return;
    }
  }
  render() {
    const data = this.state.data;
    return (
      <article className="card">
        <div className="img-div">
          <img src={data?.picture?.large} alt="profile" />
        </div>
        <div className="info">
          <p className="label">My {this.state.activeIcon} is</p>
          <h2>{this.info(this.state.activeIcon)}</h2>
        </div>
        <ul className="nav flex-between">
          <li onMouseOver={() => this.handleHover("name")}>👤</li>
          <li onMouseOver={() => this.handleHover("email")}>💌</li>
          <li onMouseOver={() => this.handleHover("age")}>📅</li>
          <li onMouseOver={() => this.handleHover("street")}>🛣</li>
          <li onMouseOver={() => this.handleHover("phone")}>📞</li>
          <li onMouseOver={() => this.handleHover("password")}>🔒</li>
        </ul>
        <button className="btn" onClick={this.handleClick}>
          {
            this.state.isFetching ? "Loading..." : "Random User"
          }
        </button>
      </article>
    )
  }
}