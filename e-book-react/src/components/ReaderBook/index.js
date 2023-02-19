import { Component } from "react";
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
        return (
            <div>
                {/* <table>
                    <tbody>
                        {
                            this.props.bookData.list.map((p, index) => (
                                <tr key={p.id}>
                                    <td><h6>{index + 1}. {p.price}</h6></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table> */}
                <h1>{this.props.bookData.list}</h1>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        bookData: state.getBooksDataByReaderId
    };
}
export default connect(mapStateToProps, { getBooksDataByReaderId })(ReaderBook);