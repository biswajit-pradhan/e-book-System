import { connect } from "react-redux";
import { Component } from "react"
import { GetBookPost } from "../../action/GetBook";
class GetBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookDetails: null,
            borrowDays: '',
            successMessage: ''
        };
    }
    //handleing event called due to click on button
    handleInputChange = (event) => {
        const value = event.target.value;
        // Validating the input value here
        if (!value || /^\d+$/.test(value)) {
            this.setState({ borrowDays: value });
        }
    }

    handleBuyNowClick = () => {
        const { bid, GetBookPost } = this.props;
        const { borrowDays } = this.state;
        if (!borrowDays || !/^\d+$/.test(borrowDays)) {
            // it will show error message only when input is not valid
            this.setState({ successMessage: 'Please enter a valid number of days.' });
            return;
        }
        // Call the action to buy the book
        GetBookPost(bid.id, localStorage.getItem('userName'), borrowDays);
        // Show success message
        this.setState({ successMessage: 'Book bought successfully.' });
    }
    render() {
        const { successMessage } = this.state;
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
                                            <img src={require(`../../coverimages/${this.props.bid.coverimg}`)} className="img-fluid rounded-start" alt="no_img" />
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
                                {/* conditional render statement in JSX */}
                                {/* the succesMessage will only get called only when successMessage is truthy */}
                                {successMessage && <div className="text-success">{successMessage}</div>}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                {/* onclicking the button it will call handleBuyNowClick function */}
                                <button type="button" className="btn btn-primary" onClick={this.handleBuyNowClick}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
//function in the Redux library for managing state in a React application
function mapStateToProps(state) {
    return {
        bookdetails: state.getbookbyid
    };
}
//takes in the Redux store state as an argument and returns an object that maps the relevant parts
export default connect(mapStateToProps, { GetBookPost })(GetBook);


