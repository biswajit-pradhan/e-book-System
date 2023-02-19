import React, { Component } from "react";
import { connect } from "react-redux";
import { getBooksDataByReaderId } from "../../action/ReaderBook";

export class ReaderBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getBooksDataByReaderId();
  }

  render() {
    const { bookData } = this.props;
    return (
      <div>
        <table>
          <tbody>
            {this.props.bookData.map((book, index) => (
              <tr key={book.id}>
                <td>
                  <h6>{index + 1}. {book.name}</h6>
                  <p>{book.assignedDate}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      bookData: state.getBooksDataByReaderId.list,
    };
  }
  
export default connect(mapStateToProps, { getBooksDataByReaderId })(ReaderBook);
