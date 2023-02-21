import { Component } from "react";
import { connect } from "react-redux";
import { allBooks } from "../../action/Book";
import GetBook from "../getBook";
import "./style.css";


class Book extends Component {
    //Explaining Life Cycle Hook here
    //constructor here define and declare the state
    constructor(props) {
        super(props);
        //state defination
        this.state = {
             bid:0
        };
    }
//here componentdidmount prepare data
    componentDidMount() {
        this.props.allBooks();

    }

    handleClick=(b)=>{
        console.log(b)

    }
    //we render here with html for display on screen
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
                        {// mapping is used here for getting data in itereation
                            this.props.bookList.list.map((b, index) => (

                                <tr key={b.id}>
                                    <th scope="row" key={b.id}> {index + 1}</th>
                                    <td>{b.id}</td>
                                    <td><img src={require('../../coverimages/' + b.coverimg)} width={180} height={200} alt="img here"></img></td>
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
                                    {/* bid is passed down to the GetBook component as a prop. */}
                                    <td><GetBook bid={this.state.bid} /></td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        )
    };

}
//function in the Redux library for managing state in a React application
function mapStateToProps(state) {
    return {
        bookList: state.book
    };
}
//takes in the Redux store state as an argument and returns an object that maps the relevant parts
export default connect(mapStateToProps, { allBooks })(Book);
