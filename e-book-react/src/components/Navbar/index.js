import { Component } from "react";
import { SearchPost } from "../../action/Search";
import LogIn from "../User/LogIn";
import { Link } from "react-router-dom";
export default class Navbar extends Component{
    constructor() {
        super();
        this.state = {
          isLoggedIn : false
        };
        let username = localStorage.getItem('username');
    
        if(username === null || username === undefined) 
              this.setState({isLoggedIn: false})
        else
              this.setState({isLoggedIn: true})
      }
    
      componentDidMount(){
        let username = localStorage.getItem('username');
    
        if(username === null || username === undefined) 
              this.setState({isLoggedIn: false})
        else
              this.setState({isLoggedIn: true})
      }
    render(){
        return (
            <div>
                <section>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <a className="navbar-brand" href="/"><b>eBook</b></a>
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/aboutUs"><b>About Us</b></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link" href="/books"><b>Our Books</b></a>
                                </li><li className="nav-item active">
                                    <a className="nav-link" href="/search"><b>Search Book</b></a>
                                </li>
                                <li className="nav-item">
                                    <select className="nav-link" defaultValue={"DEFAULT"}>
                                        <option value="DEFAULT">Book Category</option>
                                        <option value="FICTION">Fiction</option>
                                        <option value="NONFICTION">Non-Fiction</option>
                                        <option value="TECHNOLOGY">Technology</option>
                                        <option value="SCIENCE">Science</option>
                                        <option value="HISTORY">History</option>
                                        <option value="BUSINESS">Business</option>
                                    </select>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <a className="nav-link" href="/publisher"><b>Publisher</b> ctr</a>
                                <a className="nav-link" href="/author"><b>Author</b> ctr</a>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                {/* <a className="nav-link" href="/login"><b>Login</b> or <b>Signup</b></a> */}
                                {this.state.isLoggedIn ? <Link to="/logout"><button className="btn btn-outline-danger">
                                    Logout </button>  </Link> :
                                    <Link to='/'><button className="btn btn-outline-success">
                                        Login </button></Link>
                                }
                            </form>
                        </div>
                    </nav>
                </section>
            </div>
        )
    }
}