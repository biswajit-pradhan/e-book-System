import { Component } from "react";
import { connect } from "react-redux";
import { publisherBooks } from "../../action/Publisher";
import { booksOnRent } from "../../action/Publisher";
import { addBook } from "../../action/Publisher";
import { AddBook } from "./publishBook";

export class BookOnRent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {

        };
    }

    componentDidMount() {
        this.props.booksOnRent(localStorage.getItem('userName'));
    }
    render() {
        return (
            <div>
                <h1>Books on Rent</h1>
                    <table className="table table-dark table-hover">
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
                                this.props.bookList.list.map((b, index) => (

                                    <tr key={b.id}>
                                        <th scope="row" key={b.id}> {index + 1}</th>
                                        <td>{b.id}</td>
                                        <td>{b.name}</td>
                                        <td>{b.price}</td>
                                        <td>{b.authorName}</td>
                                        <td>{b.publishingYear}</td>
                                        <td>{b.bookLanguage}</td>
                                        <td>{b.bookCategory}</td>
                                        <td>{b.bookLink}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

        )
    };
}
function mapStateToProps(state) {
    return {
      bookList: state.publbook
    };
}
export default connect(mapStateToProps, {booksOnRent})(BookOnRent);