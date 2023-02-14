import { Component } from "react";

export default class Navbar extends Component{
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
                                    <a className="nav-link" href="#"><b>About Us</b><span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <select className="nav-link">
                                        <option select="true" value="">Book Category</option>
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
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                <a className="nav-link" href="/login"><b>Login</b></a>
                            </form>
                        </div>
                    </nav>
                </section>
            </div>
        )
    }
}