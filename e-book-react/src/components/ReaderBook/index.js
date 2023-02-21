import React, { Component } from "react";
import { connect } from "react-redux";
import { getBooksDataByReaderId } from "../../action/ReaderBook";
import LogIn from "../User/LogIn";
import "./style.css";

export class ReaderBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getBooksDataByReaderId(localStorage.getItem('userName'));
    let username = localStorage.getItem('userName');

    if(username === null || username === undefined) 
          this.setState({isLoggedIn: false})
    else
          this.setState({isLoggedIn: true})
  }
  handleReadButtonClick = (url) => {
    window.open(url, '_blank');
  };

  render() {
    return (
      !this.state.isLoggedIn?<div ><LogIn /></div>  :
      <div>
          <h1>My Book List</h1>
          <table className="table table-dark table-hover">
              <thead>
                  <tr>
                      <th scope="col">SlNo</th>
                      <th scope="col">ID</th>
                      <th scope="col">Book View</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Author Name</th>
                      <th scope="col">AssignedDate</th>
                      <th scope="col">BorrowingDays</th>
                      <th scope="col">LastDate</th>
                      <th scope="col">Read Now</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      this.props.bookData.map((b, index) => (

                          <tr key={b.id}>
                              <th scope="row" key={b.id}> {index + 1}</th>
                              <td>{b.id}</td>
                              <td><img src={require('../../coverimages/' + b.book.coverimg)} width={180} height={200} alt="img here"></img></td>
                              <td>{b.book.name}</td>
                              <td>{b.book.price}</td>
                              <td>{b.book.authorName}</td>
                              <td>{b.assignedDate}</td>
                              <td>{b.borrowingDays}</td>
                              <td>{b.lastDate}</td>
                              <td><button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={() => this.handleReadButtonClick(b.book.bookLink)}>READ</button></td>
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
      bookData: state.getBooksDataByReaderId.list,
    };
  }
  
export default connect(mapStateToProps, { getBooksDataByReaderId })(ReaderBook);
