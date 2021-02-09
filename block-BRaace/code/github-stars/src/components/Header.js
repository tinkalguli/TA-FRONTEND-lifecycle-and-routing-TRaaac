import {NavLink, withRouter} from "react-router-dom";

function Header(props) {
  if(props.location.pathname === "/") {
    return (
      <section className="home-container container">
        <div>
          <h1>Github Stars</h1>
          <header className="flex-between nav-btns">
            <NavLink
              activeClassName="nav-btn-active nav-btn-1-active"
              className="nav-btn nav-btn-1"
              to="/popular"
            >Popular</NavLink>
            <NavLink
              activeClassName="nav-btn-active nav-btn-2-active"
              className="nav-btn nav-btn-2"
              to="/battle"
            >Battle</NavLink>
          </header>
        </div>
      </section>
    )
  }
  return (
    <header className="flex-between nav-btns">
      <NavLink
        activeClassName="nav-btn-active nav-btn-1-active"
        className="nav-btn nav-btn-1"
        to="/popular"
      >Popular</NavLink>
      <NavLink
        activeClassName="nav-btn-active nav-btn-2-active"
        className="nav-btn nav-btn-2"
        to="/battle"
      >Battle</NavLink>
    </header>
  )
}

export default withRouter(Header);