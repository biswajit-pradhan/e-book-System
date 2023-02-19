import { connect } from "react-redux";
import { Component } from "react"
import { GetBookPost } from "../../action/GetBook";
class GetBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookDetails: null,
            borrowDays: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ borrowDays: event.target.value });
    }
    render() {
        return (
            <div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                    <div className="row g-0">
                                        {/* <div className="col-md-4">
                                            <img src={require(`../../coverimages/${this.props.bid.coverimg}`)} className="img-fluid rounded-start" alt="no img" />
                                        </div> */}
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">{this.props.bid.name}</h5>
                                                <p className="card-text">Author :{this.props.bid.authorName}</p>
                                                <p className="card-text">BookCategory :{this.props.bid.bookCategory}</p>
                                                <h5 className="card-text text-danger">PRICE:  {this.props.bid.price} Rs.</h5>
                                                <p className="card-text"><small className="text-muted">Best in Readers Choice</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                                placeholder="Enter number of days you wanna to borrow" value={this.state.borrowDays} onChange={this.handleInputChange}></input>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => this.props.GetBookPost(this.props.bid.id, localStorage.getItem('userName'),this.state.borrowDays)}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
function mapStateToProps(state) {
    return {
        bookdetails: state.getbookbyid
    };
}
export default connect(mapStateToProps, { GetBookPost })(GetBook);


