import { Component } from "react";
import { connect } from "react-redux";
import { getAllPublisher } from "../../action/Home";
import { getAllAuthor } from "../../action/Home";
import {topFiveBooksByBorrowingDays} from "../../action/Home";
import {alllatestBook} from "../../action/Home";
import "./style.css";

class Home extends Component {
    // constructor calling
    constructor(props) {
        super(props);
        //state initialization
        this.state = {};
    }

    //calling componentDidMount() lifecycle method 
    componentDidMount() {
        //Calling all necessary methods from action using props
        this.props.getAllPublisher();
        this.props.getAllAuthor();
        this.props.topFiveBooksByBorrowingDays();
        this.props.alllatestBook();
    }

    //rendering the component
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2">
                            <h6><b>Trending Publishers</b></h6>
                            <div className="row row-data">
                                {/* creating table structure for trending publishers */}
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
                                {/* creating table structure for trending authors */}
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
                                        // fetching data of trending books and showing it in the webpage
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
                                        // fetching data of latest books and showing it in the webpage
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

//Initialization of mapStateToProps()
function mapStateToProps(state) {
    return {
        publishers: state.allPublisher,
        authors: state.allAuthor,
        trendingBooks: state.readerBook,
        latestBooks: state.alllatestBook
    };
}
export default connect(mapStateToProps, { getAllPublisher, getAllAuthor, topFiveBooksByBorrowingDays, alllatestBook})(Home); 