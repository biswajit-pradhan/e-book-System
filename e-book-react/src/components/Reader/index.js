import { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar";
import { getAllPublisher } from "../../action/Reader";
import { getAllAuthor } from "../../action/Reader";
import Slider from "react-slick";
import "./style.css";
import { Carousel } from "bootstrap";
var listOfImages = [];

class Reader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listOfImages: this.importAll(require.context('../../coverimages/', false, /\.(png|jpe?g|svg)$/))
        };
    }
    componentDidMount() {
        this.props.getAllPublisher();
        this.props.getAllAuthor();
    }


    importAll(r) {
        return r.keys().map(r);
    }

    render() {
        return (
            <div>
                <div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                        <h5>Trending Publishers</h5>
                            <div className="row row-data">
                            
                                <table>
                                    <tbody>
                                        {
                                            this.props.publishers.list.map((p,index) => (
                                                <tr key={p.id}>
                                                    <td><h6>{index+1}. {p.name}</h6></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <hr />
                            <h5>Trending Authors</h5>
                            <div className="row row-data">
                            
                                <table>
                                    <tbody>
                                        {
                                            this.props.authors.list.map((a,index) => (
                                                <tr key={a.id}>
                                                    <td><h6>{index}. {a.name}</h6></td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <section>



                                {/* <div className="card mb-3 card-height='100px'" style={{ maxWidth: '100%' }}>
                                                        <div className="row g-0">
                                                            <div className="col-md-4" >
                                                                <img src={image} className="img-fluid rounded-start" alt="info" />
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Card title</h5>
                                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                                    <p className="card-text"><small className="text-muted">Last updated 3000 sec ago</small></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}

                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <div className="card mb-3 card-height='100px'" style={{ maxWidth: '97%' }}>
                                                <div className="row g-0">
                                                    <div className="col-md-4" >
                                                        <img src={this.state.listOfImages[0]} className="img-fluid rounded-start" alt="info" />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 3000 sec ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            this.state.listOfImages.map((image, index) => (
                                                <div className="carousel-item" key={index}>
                                                    <div className="card mb-3 card-height='100px'" style={{ maxWidth: '97%' }}>
                                                        <div className="row g-0">
                                                            <div className="col-md-4" >
                                                                <img src={image} className="img-fluid rounded-start" alt="info" />
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">Card title</h5>
                                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                                    <p className="card-text"><small className="text-muted">Last updated 3000 sec ago</small></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>

                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>

                            </section>
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
        authors: state.allAuthor
    };
}
export default connect(mapStateToProps, { getAllPublisher, getAllAuthor })(Reader); 