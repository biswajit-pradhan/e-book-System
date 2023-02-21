import { Component } from "react";
import { connect } from "react-redux";
import { SearchByBookNamePost } from "../../action/Search";
import { SearchByAuthorNamePost } from "../../action/Search";
import { SearchByPublisherNamePost } from "../../action/Search";
import GetBook from "../getBook";

import "./style.css";
export class Search extends Component {
    //constructor here define and declare the state
    constructor(props) {
        super(props);
        //state defination
        this.state = {
            bid:0,
            errors: {},
            msg: "",
            isLoggedIn: false
        };
    }
    //here componentdidmount prepare data
    componentDidMount() {}
    //we render here with html for display on screen
    render() {
        return (
            <div>
                <div>
                    <h1>Search a Book</h1>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="ByBookName" aria-label="Search" 
                        //fetching the book from baatbase by BookName
                        onChange={(e) => this.props.SearchByBookNamePost(e.target.value).catch((errors) =>
                            this.setState({ msg: "errors.response.data.msg" }))} />
                        <span style={{ color : 'red'}}>{this.state.msg}</span> 
                        <button className="btn btn-primary btn-sm" type="submit">Search</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className="form-control mr-sm-2" type="search" placeholder="ByAutorName" aria-label="Search" 
                        //fetching the book from baatbase by AuthorName
                        onChange={(e) => this.props.SearchByAuthorNamePost(e.target.value).catch((errors) =>
                  this.setState({ msg: "errors.response.data.msg" }))} />
                        <button className="btn btn-primary btn-sm" type="submit">Search</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className="form-control mr-sm-2" type="search" placeholder="ByPublisherName" aria-label="Search" 
                        //fetching the book from baatbase by PublisherName
                        onChange={(e) => this.props.SearchByPublisherNamePost(e.target.value).catch((errors) =>
                  this.setState({ msg: "errors.response.data.msg" }))} />
                        <button className="btn btn-primary btn-sm" type="submit">Search</button>
                    </form>
                    <br /><br />
                    <div className="col-lg-12">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">SlNo</th>
                                <th scope="col">ID</th>
                                <th scope="col">Book View</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Author Name</th>
                                <th scope="col">Publishing Year</th>
                                <th scope="col">Book Language</th>
                                <th scope="col">Book Category</th>
                                <th scope="col">Book Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {// mapping is used here for getting data in itereation
                                this.props.searchList.list.map((b, index) => (

                                    <tr key={b.id}>
                                        <th scope="row" key={b.id}> {index + 1}</th>
                                        <td>{b.id}</td>
                                        <td><img src={require('../../coverimages/'+b.coverimg)}width={180} height={200} alt="info"></img></td>
                                        <td>{b.name}</td>
                                        <td>{b.price}</td>
                                        <td>{b.authorName}</td>
                                        <td>{b.publishingYear}</td>
                                        <td>{b.bookLanguage}</td>
                                        <td>{b.bookCategory}</td>
                                        <td>
                                            {/* //used modal for getting the screen hover all other screen */}
                                        <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal"onClick={() => this.setState({bid: b})}>Get Book</button>
                                    </td>
                                    <td><GetBook bid={this.state.bid} /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}
//function in the Redux library for managing state in a React application
function mapStateToProps(state) {
    return {
        searchList: state.search     
    };
}
//takes in the Redux store state as an argument and returns an object that maps the relevant parts
export default connect(mapStateToProps, { SearchByBookNamePost, SearchByAuthorNamePost, SearchByPublisherNamePost})(Search);