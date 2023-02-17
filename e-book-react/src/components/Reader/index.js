import { Component } from "react";
import { connect } from "react-redux";
import { getAllPublisher } from "../../action/Reader";
import { getAllAuthor } from "../../action/Reader";
import "./style.css";
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
                                <div><h4><b>Our Latest Books</b></h4></div>
                            <div className="image-grid">
                                    {
                                        this.state.listOfImages.map((image,index)=>(
                                            <div key={index} className="iamge-item">
                                                <img src={image} alt="info" />
                                            </div>
                                        ))
                                    }
                            </div>
                            </div>
                            <div className="latestBook">
                                <div><h4><b>Just Arrived Books</b></h4></div>
                            <div className="image-grid">
                                    {
                                        this.state.listOfImages.map((image,index)=>(
                                            <div key={index} className="iamge-item">
                                                <img src={image} alt="info" />
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
        authors: state.allAuthor
    };
}
export default connect(mapStateToProps, { getAllPublisher, getAllAuthor })(Reader); 