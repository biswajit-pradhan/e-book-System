import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount() {
    let username = localStorage.getItem("userName");

    if (username === null || username === undefined)
      this.setState({ isLoggedIn: false });
    else this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div>
        <section>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="/">
                <b>eBook</b>
              </a>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="/aboutUs">
                    <b>About Us</b>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/books">
                    <b>Our Books</b>
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="/search">
                    <b>Search Book</b>
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
              <a className="nav-link" href="/readerbook">
                  <b>Reader</b> prof
                </a>
                <a className="nav-link" href="/publisher">
                  <b>Publisher</b> ctr
                </a>
                <a className="nav-link" href="/author">
                  <b>Author</b> ctr
                </a>
                {this.state.isLoggedIn ? (
                  <Link to="/logout">
                    <button className="btn btn-outline-danger">Logout</button>{" "}
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="btn btn-outline-success">Login</button>
                  </Link>
                )}
              </form>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}
