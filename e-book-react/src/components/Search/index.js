import { Component } from "react";
import { connect } from "react-redux";
import { SearchByBookNamePost } from "../../action/Search";
import { SearchByAuthorNamePost } from "../../action/Search";
import { SearchByPublisherNamePost } from "../../action/Search";

import "./style.css";
export class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            msg: "",
            isLoggedIn: false
        };
    }
    componentDidMount() {}
    render() {
        return (
            <div>
                <div>
                    <h1>Search a Book</h1>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="ByBookName" aria-label="Search" 
                        onChange={(e) => this.props.SearchByBookNamePost(e.target.value).catch((errors) =>
                            this.setState({ msg: "errors.response.data.msg" }))} />
                        <span style={{ color : 'red'}}>{this.state.msg}</span> 
                        <button className="btn btn-primary btn-sm" type="submit">Search</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className="form-control mr-sm-2" type="search" placeholder="ByAutorName" aria-label="Search" 
                        onChange={(e) => this.props.SearchByAuthorNamePost(e.target.value).catch((errors) =>
                  this.setState({ msg: "errors.response.data.msg" }))} />
                        <button className="btn btn-primary btn-sm" type="submit">Search</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className="form-control mr-sm-2" type="search" placeholder="ByPublisherName" aria-label="Search" 
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
                            {
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
                                        <td><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Get Book</button></td>
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
function mapStateToProps(state) {
    return {
        searchList: state.search     
    };
}
export default connect(mapStateToProps, { SearchByBookNamePost, SearchByAuthorNamePost, SearchByPublisherNamePost})(Search);