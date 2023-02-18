import { Component } from "react";
import { connect } from "react-redux";
import { getAllPublisher } from "../../action/Home";
import { getAllAuthor } from "../../action/Home";
import {topFiveBooksByBorrowingDays} from "../../action/Home";
import {alllatestBook} from "../../action/Home";
import "./style.css";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }
    componentDidMount() {
        this.props.getAllPublisher();
        this.props.getAllAuthor();
        this.props.topFiveBooksByBorrowingDays();
        this.props.alllatestBook();
    }
    render() {
        return (
            <div>
                <div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2">
                            <h6><b>Trending Publishers</b></h6>
                            <div className="row row-data">

                                <table>
                                    <tbody>
                                        {
                                            this.props.publishers.list.map((p, index) => (
                                                <tr key={p.id}>
                                                    <td><h6>{index + 1}. {p.name}</h6></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <h6><b>Trending Authors</b></h6>
                            <div className="row row-data">
                                <table>
                                    <tbody>
                                        {
                                            this.props.authors.list.map((a, index) => (
                                                <tr key={a.id}>
                                                    <td><h6>{index+1}. {a.name}</h6></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="latestBook">
                                <div><h4><b>Trending Books</b></h4></div>
                            <div className="image-grid">
                                    {
                                        this.props.trendingBooks.list.map((book,index)=>(
                                            <div key={index} className="iamge-item">
                                                <img src={require('../../coverimages/'+book.coverimg)}width={195.49} height={300} alt="info" />
                                            </div>
                                        ))
                                    }
                            </div>
                            </div>
                            <div className="latestBook">
                                <div><h4><b>Latest Books</b></h4></div>
                            <div className="image-grid">
                                    {
                                        this.props.latestBooks.list.map((book,index)=>(
                                            <div key={index} className="iamge-item">
                                                <img src={require('../../coverimages/'+book.coverimg)}width={195.49} height={300} alt="info" />
                                            </div>
                                        ))
                                    }
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        publishers: state.allPublisher,
        authors: state.allAuthor,
        trendingBooks: state.readerBook,
        latestBooks: state.alllatestBook
    };
}
export default connect(mapStateToProps, { getAllPublisher, getAllAuthor, topFiveBooksByBorrowingDays, alllatestBook})(Home); 