import { Component } from "react";
import { connect } from "react-redux";
import { allBooks } from "../../action/Book";
import "./style.css";

export class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.allBooks();

    }

    handleClick=(b)=>{
        console.log(b)

    }

    render() {

        return (
            <div>
                <h1>Books List In DB</h1>
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
                                this.props.bookList.list.map((b, index) => (

                                    <tr key={b.id}>
                                        <th scope="row" key={b.id}> {index + 1}</th>
                                        <td>{b.id}</td>
                                        <td><img src={require('../../coverimages/'+b.coverimg)}width={180} height={200}></img></td>
                                        <td>{b.name}</td>
                                        <td>{b.price}</td>
                                        <td>{b.authorName}</td>
                                        <td>{b.publishingYear}</td>
                                        <td>{b.bookLanguage}</td>
                                        <td>{b.bookCategory}</td>
                                        <td><button className="btn btn-outline-success my-2 my-sm-0" onClick={()=>this.handleClick(b)}>Get Book</button></td>
                                        
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
      bookList: state.book
    };
}
export default connect(mapStateToProps, {allBooks})(Book);