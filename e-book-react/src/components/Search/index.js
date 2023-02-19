import { Component } from "react";
import { connect } from "react-redux";
import { SearchPost } from "../../action/Search";
import Navbar from "../Navbar";
export class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    componentDidMount() {
        //this.props.SearchPost('t');
        //console.log(this.props.SearchPost(value))
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div>
                    <h1>Search a Book</h1>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => this.props.SearchPost(e.target.value)} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <br /><br />
                    <div className="col-lg-9">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">SlNo</th>
                                    <th scope="col">ID</th>
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
                                            <td>{b.name}</td>
                                            <td>{b.price}</td>
                                            <td>{b.authorName}</td>
                                            <td>{b.publishingYear}</td>
                                            <td>{b.bookLanguage}</td>
                                            <td>{b.bookCategory}</td>
                                            <td><button className="btn btn-primary btn-sm" type="submit">Get Book</button></td>
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
export default connect(mapStateToProps, { SearchPost })(Search);