import { Component } from "react";
import { connect } from "react-redux";
import Navbar from "../Navbar";
import { alllatestBook } from "../../action/Reader";
import Slider from 'react-slick';

class Reader extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
        this.props.alllatestBook();
        console.log(this.props.alllatestBook());
    }
    render() {
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="container-fliud">
                    <div className="row">
                        <div className="col-sm-3">
                            <ul className="list-group">
                                <li className=" list-group-item">  Show all Employees </li>
                                <li className="list-group-item">Add Department</li>
                                <li className="list-group-item">Add Employee</li>
                                <li className="list-group-item">Add Project</li>
                                <li className="list-group-item">Assign Employee to Project</li>
                                <li className="list-group-item">Show all Projects</li>
                                <li className=" list-group-item">  Show all Employees </li>
                                <li className="list-group-item">Add Department</li>
                                <li className="list-group-item">Add Employee</li>
                                <li className="list-group-item">Add Project</li>
                                <li className="list-group-item">Assign Employee to Project</li>
                                <li className="list-group-item">Show all Projects</li>
                            </ul>
                        </div>
                        <div className="col-lg-9" >
                            <section style={{ height: "100%" }}> 
                                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                                    {
                                        this.props.latestBookList.list.map((e, index) => (

                                            <div className="carousel-inner" >
                                                <div className="carousel-item active" data-bs-interval="3000" >
                                                    <div className="card mb-3" style={{ maxWidth: '100%' }}>
                                                        <div className="row g-0"key={index}>
                                                            <div className="col-md-4" >
                                                                <img src={require('../../coverimages/' + e.coverimg)} className="img-fluid rounded-start" alt="Image Not Loading" />
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{e.id}</h5>
                                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                                    <p className="card-text"><small className="text-muted">Last updated 3000 sec ago</small></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                ))
                                             }
                                    {/* <div className="carousel-item" data-bs-interval="3000">
                                            <div className="card mb-3" style={{ maxWidth: '100%' }}>
                                         
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img src={require('../../coverimages/1068665.jpg')} className="img-fluid rounded-start" alt="Image Not Loading" />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 2000 sec ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                                    {/* <div className="carousel-item" >
                                            <div className="card mb-3" style={{ maxWidth: '100%' }}>
                                                <div className="row g-0">
                                                    <div className="col-md-4">
                                                        <img src={require('../../coverimages/1640661.jpg')} className="img-fluid rounded-start" alt="Image Not Loading" />
                                                    </div>
                                                    <div className="col-md-8">
                                                        <div className="card-body">
                                                            <h5 className="card-title">Card title</h5>
                                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                            <p className="card-text"><small className="text-muted">Last updated 0 secs ago</small></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}

                                    <button className="carousel-control-prev  " type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" style={{ border: '0px', height: '95%' }}>
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next visible" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" style={{ border: '0px', height: '95%' }}>
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
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
        latestBookList: state.latestbook
    };
}
export default connect(mapStateToProps, { alllatestBook })(Reader); 