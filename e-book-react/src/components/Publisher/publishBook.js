import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { addBook } from "../../action/Publisher";

export class AddBook extends Component {

    constructor(props) {
        super(props);

        this.state = {
            publisher: {
                name: '',
                bname: '',
                price: 0,
                authorName: '',
                publishingYear: '',
                bookLanguage: '',
                bookCategory: '',
                bookLink: '',
                coverimg: ''
            },
            errors: {},
            msg: '',

        };
    }

    componentDidMount() {
        //fetch all departments: call action
        //this.props.listDepartment();
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3"> </div>
                    <div className="col-6">
                        <div className="card">
                            <h5 className="card-header">Add Book</h5>
                            <div className="card-body">
                                <h5 className="card-title">Enter Book Info: </h5>
                                <p className="card-text">
                                    <span>{this.state.msg}</span> <br />
                                    <label>Publisher Name: </label>&nbsp;&nbsp;
                                    <input type="text"
                                        name="name"
                                        value={this.state.publisher.name}
                                        onChange={this.changeHandler} />
                                    <span style={{ color: 'red' }}>{this.state.errors['name']}</span>
                                    <br /><br />
                                    <label>Book Name: </label>&nbsp;&nbsp;
                                    <input type="text"
                                        name="bname"
                                        value={this.state.publisher.bname}
                                        onChange={this.changeHandler} />
                                    <span style={{ color: 'red' }}>{this.state.errors['bname']}</span>
                                    <br /><br />
                                    <label>Book Price: </label>&nbsp;&nbsp;
                                    <input type="number"
                                        name="price"
                                        value={this.state.publisher.price}
                                        onChange={this.changeHandler} />
                                    <span style={{ color: 'red' }}>{this.state.errors['price']}</span>
                                    <br /><br />
                                    <label>Author Name: </label>&nbsp;&nbsp;
                                    <input type="text"
                                        name="authorName"
                                        value={this.state.publisher.authorName}
                                        onChange={this.changeHandler} />
                                    <span style={{ color: 'red' }}>{this.state.errors['authorName']}</span>
                                    <br /><br />
                                    <label>Publishing Year: </label>&nbsp;&nbsp;
                                    <input type="number"
                                        name="publishingYear"
                                        value={this.state.publisher.publishingYear}
                                        onChange={this.changeHandler} />
                                    <span style={{ color: 'red' }}>{this.state.errors['publishingYear']}</span>
                                    <br /><br />
                                    <label>Book Language: </label>&nbsp;&nbsp;
                                    <input type="text"
                                        name="bookLanguage"
                                        value={this.state.publisher.bookLanguage}
                                        onChange={this.changeHandler} />
                                    <span style={{ color: 'red' }}>{this.state.errors['bookLanguage']}</span>
                                    <br /><br />
                                    <label>Select Category </label>&nbsp;&nbsp;
                                    <select name="bookCategory"
                                        value={this.state.publisher.bookCategory}
                                        onChange={this.changeHandler} >
                                        <option key={0} value="">Select Category</option>
                                        <option key={1} value="FICTION">FICTION</option>
                                        <option key={2} value="NONFICTION">NONFICTION</option>
                                        <option key={3} value="TECHNOLOGY">TECHNOLOGY</option>
                                        <option key={4} value="SCIENCE">SCIENCE</option>
                                        <option key={5} value="HISTORY">HISTORY</option>
                                        <option key={6} value="BUSINESS">BUSINESS</option>
                                        <option key={7} value="GENERAL">GENERAL</option>
                                        <option key={8} value="STORY">STORY</option>
                                        <option key={9} value="NOVEL">NOVEL</option>
                                    </select>
                                    <span style={{ color: 'red' }}>{this.state.errors['bookCategory']}</span>
                                    <br /><br />
                                    <label>Book Link: </label>&nbsp;&nbsp;
                                    <input type="text"
                                        name="bookLink"
                                        value={this.state.publisher.bookLink}
                                        onChange={this.changeHandler} />
                                    <span style={{ color: 'red' }}>{this.state.errors['bookLink']}</span>
                                    <br /><br />
                                    <label>Cover Image: </label>&nbsp;&nbsp;
                                    <input type="text"
                                        name="coverimg"
                                        value={this.state.publisher.coverimg}
                                        onChange={this.changeHandler} />
                     <span style={{ color: 'red' }}>{this.state.errors['coverimg']}</span>
                                    <br /><br />

                                    <button onClick={this.onAdd} className="btn btn-primary">Add Book</button>
                                </p>

                            </div>
                        </div>
                        <div className="col-3"> </div>

                    </div>
                </div>
            </div>
        );
    }

    changeHandler = (event) => {
        this.setState({
            publisher: {
                ...this.state.publisher,
                [event.target.name]: event.target.value
            },



        });
    }

    onAdd = () => {
        /* Validate User inputs */
        if (this.handleValidation()) {
            console.log(this.state.publisher);
            /* Call the API */
            this.postBook(this.state.publisher);
        }
        else {
            /* Display error messages */
            console.log('validation not passed..');
        }
    }
handleValidation(){
    const namePattern=/^[a-zA-Z\s]{2,25}$/;
    const bnamePattern=/^[a-zA-Z\s]{2,25}$/;
    const authorNamePattern=/^[a-zA-Z\s]{2,25}$/;
    const pYearPttern=/^[12][0-9]{3}$/;
    const bookLanguagePattern=/^[a-zA-Z\s]{2,25}$/;
    let name = this.state.publisher.name;
    let bname = this.state.publisher.bname;
    let price =this.state.publisher.price;
    let authorName = this.state.publisher.authorName;
    let publishingYear = this.state.publisher.publishingYear;
    let bookLanguage = this.state.publisher.bookLanguage;
    let bookCategory = this.state.publisher.bookCategory;
    let bookLink = this.state.publisher.bookLink;
    let coverimg = this.state.publisher.coverimg;
     
    let tempErrors={}
    let formValid = true; 

    if(!name){ //If name is not given

        formValid = false;
        tempErrors['name']='Publisher Name cannot be empty';
    }
    else if(!namePattern.test(name)){
        formValid=false;
        tempErrors['name']='Publisher Name must be Min 2 charecters Max 25 charectersr';
    }
    if(!bname){ //If book name is not given
        formValid = false;
        tempErrors['bname']='Book Name cannot be empty';
    }
    else if(!bnamePattern.test(bname)){
        formValid=false;
        tempErrors['bname']='Book name Name must be Min 2 charecters Max 25 charectersr';
    }
    if(!price){ //If price is not given
        formValid = false;
        tempErrors['price']='Book price cannot be empty';
    }
    
    if(!authorName){ //If auther name is not given
        formValid = false;
        tempErrors['authorName']='Auther Name cannot be empty';
    }
    else if(!authorNamePattern.test(authorName)){
        formValid=false;
        tempErrors['authorName']='Book name Name must be Min 2 charecters Max 25 charectersr';
    }
    if(!publishingYear){ //If publishing year is not given
        formValid = false;
        tempErrors['publishingYear']='Please select publishing year';
    }
    else if(!pYearPttern.test(publishingYear)){
        formValid=false;
        tempErrors['publishingYear']='Year must be 4 digit';
    }

    if(!bookLanguage){ //If bookLanguage is not given
        formValid = false;
        tempErrors['bookLanguage']='Please select bookLanguage';
    }
    else if(!bookLanguagePattern.test(bookLanguage)){
        formValid=false;
        tempErrors['bookLanguage']='Book language must be Min 2 charecters Max 25 charectersr';
    }

    if(!bookCategory){ //If bookCategory is not given
        formValid = false;
        tempErrors['bookCategory']='Please select bookCategory';
    }
    if(!bookLink){ //If bookLink is not given
        formValid = false;
        tempErrors['bookLink']='Please enter bookLink';
    }
    if(!coverimg){ //If bookLink is not given
        formValid = false;
        tempErrors['coverimg']='Please enter coverimg';
    }
   
    this.setState({
        errors: tempErrors
    });

        return formValid;
    }

    async postBook(p) {
        let publisherData = {
            name: p.name,
            book: {
                name: p.bname,
                price: p.price,
                authorName: p.authorName,
                publishingYear: p.publishingYear,
                bookLanguage: p.bookLanguage,
                bookCategory: p.bookCategory,
                bookLink: p.bookLink,
                coverimg: p.coverimg
            }
        }
        try {
            const response = axios.post("http://localhost:8080/api/publisher/add", publisherData);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
                msg: "Book Added"
            })
            this.props.AddBook(data);
        } catch (error) {
            this.setState({
                msg: "Book Added"
            })
        }
    }
}


function mapStateToProps(state) {
    return {
        books: []
    };
}

export default connect(mapStateToProps, { addBook })(AddBook); 