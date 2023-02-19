import { connect } from "react-redux";
import { Component } from "react"
import { GetBookPost } from "../../action/GetBook";
import React, { useState } from 'react';
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

                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel" ></h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                                    <div class="row g-0">
                                        <div className="col-md-4">
                                            <img src={require(`../../coverimages/${this.props.bid.coverimg}`)} className="img-fluid rounded-start" alt="no img" />
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{this.props.bid.name}</h5>
                                                <p class="card-text">Author :{this.props.bid.authorName}</p>
                                                <p class="card-text">BookCategory :{this.props.bid.bookCategory}</p>
                                                <h5 class="card-text text-danger">PRICE:  {this.props.bid.price} Rs.</h5>
                                                <p class="card-text"><small class="text-muted">Best in Readers Choice</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                                placeholder="Enter number of days you wanna to borrow" value={this.state.borrowDays} onChange={this.handleInputChange}></input>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" onClick={() => this.props.GetBookPost(this.props.bid.id, localStorage.getItem('userName'),this.state.borrowDays)}>Buy Now</button>
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


