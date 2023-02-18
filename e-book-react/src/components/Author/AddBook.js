import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../../action/Author';


class AddBook extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
           
               book:{
                    name:'',
                    bname:'',
                    price: 0.0,
                    authorName:'',
                    publishingYear:0,
                    bookLanguage:'',
                    bookCategory:'',
                    bookLink:'' 
              },
            errors: {},
            msg: '',
           
            }
      }


    render() {
        return (
            <div>
            <div className='row'>
                <div className='col-sm-3'>
                </div>
                <div className='col-sm-6'>
                <div className="card">
              <h5 className="card-header">Add Book</h5>
              <div className="card-body">
                <h5 className="card-title">Enter Book Info: </h5>
                <p className="card-text">
                <span>{this.state.msg}</span> <br />

                <label>Your Name </label>&nbsp;&nbsp;
                   <input type="text" 
                            name="name"
                            placeholder='Name'
                            value={this.state.book.name}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
                    <br /><br />
                   <label>Book Name</label>&nbsp;&nbsp;
                   <input type="text" 
                            name="bname"
                            placeholder='Enter Book Name'
                            value={this.state.book.bname}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['bname']}</span>
                    <br /><br />
                    <label>Language </label>&nbsp;&nbsp;
                    <input type="text" 
                            name="bookLanguage"
                            placeholder='Enter Book Language'
                            value={this.state.book.bookLanguage}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['bookLanguage']}</span>
                    <br /><br />
                    <label>Publishing Year </label>&nbsp;&nbsp;
                    <input type="number" 
                            name="publishingYear"
                            placeholder='Enter Year'
                            value={this.state.book.publishingYear}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['publishingYear']}</span>
                    <br /><br />
                    <label>Author Name </label>&nbsp;&nbsp;
                    <input type="text" 
                            name="authorName"
                            placeholder='Enter AuthorName'
                            value={this.state.book.authorName}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['authorName']}</span>
                    <br /><br />
                    <label>Select Category </label>&nbsp;&nbsp;
                    <select name="bookCategory" 
                            value={this.state.book.bookCategory} 
                            onChange={this.changeHandler} >
                        <option key={0} value="">--Select Category--</option>
                        <option key={1} value="FICTION">FICTION</option>
                        <option key={2} value="NONFICTION">NONFICTION</option>
                        <option key={3} value="TECHNOLOGY">TECHNOLOGY</option>
                        <option key={4} value="SCIENCE">SCIENCE</option>
                        <option key={5} value="HISTORY">HISTORY</option>
                        <option key={6} value="BUSINESS">BUSINESS</option>
                        
                    </select>
                    <span style={{ color : 'red'}}>{this.state.errors['bookCategory']}</span>
                    <br /><br />
                    <label>Price </label>&nbsp;&nbsp;
                     <input type="number" 
                            name="price" 
                            placeholder='Price'
                            value={this.state.book.price} 
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['price']}</span><br/><br/>

<label>Upload Link</label>&nbsp;&nbsp;
                    <input type="text" 
                            name="bookLink"
                            placeholder='https://'
                            value={this.state.book.bookLink}
                            onChange={this.changeHandler} />
                            <span style={{ color : 'red'}}>{this.state.errors['bookLink']}</span>
                    <br /><br />
                   
                    
                    
                    <button onClick={this.onAdd} className="btn btn-primary">Add Book</button>
                </p>
                 
              </div>
            </div> 

                </div>
                <div className='col-sm-3'>
                </div>
            </div>
               
            </div>
        );
    }
    changeHandler= (event) =>{
        this.setState({
            book: {
                ...this.state.book, 
                [event.target.name] : event.target.value
            }
        });
}

onAdd = ()=>{
    /* Validate User inputs */
    if(this.handleValidation()){
        console.log(this.state.book);
        /* Call the API */
       this.postBook(this.state.book);
       
    }
    else{
        /* Display error messages */
        console.log('validation not passed..');     
    }
}

handleValidation(){
    let name = this.state.book.name;
    let bname = this.state.book.bname;
    let authorName = this.state.book.authorName;
    let bookLanguage = this.state.book.bookLanguage;
    let publishingYear = this.state.book.publishingYear;
    let bookCategory = this.state.book.bookCategory;
    let price = this.state.book.price;
    let bookLink= this.state.book.bookLink;
   
     
    let tempErrors={}
    let formValid = true; 

    if(!name){ //If name is not given
        formValid = false;
        tempErrors['name']=' Name cannot be empty';
    }
    if(!bname){ //If name is not given
        formValid = false;
        tempErrors['bname']='Book Name cannot be empty';
    }

    if(!authorName){ //If name is not given
        formValid = false;
        tempErrors['authorName']='Author Name cannot be empty';
    }
    if(!bookLanguage){ //If language is not given
        formValid = false;
        tempErrors['bookLanguage']='Language cannot be empty';
    }
    if(!publishingYear){ //If year is not given
        formValid = false;
        tempErrors['publishingYear']='Year cannot be empty';
    }
    if(!bookCategory){ //If book category is not given
        formValid = false;
        tempErrors['bookCategory']='Please select book category';
    }
    if(!price){ //If price is not given
        formValid = false;
        tempErrors['price']='Price cannot be empty';
    }
    if(!bookLink){ //If book category is not given
        formValid = false;
        tempErrors['bookLink']='Please upload file';}
    this.setState({
        errors: tempErrors
    });

    return formValid; 
}

async postBook(b){
    let books= {
        name:b.name,
        book:{
        name: b.bname,
        authorName: b.authorName,
        bookLanguage: b.bookLanguage,
        publishingYear: b.publishingYear,
        bookCategory: b.bookCategory,
        price:b.price,
        bookLink:b.bookLink,
        }    
    }
    try {
        const response = axios.post("http://localhost:8080/api/author/add" , books);
        const data = (await response).data;
        console.log('API success');
        console.log(data);
        this.setState({
            msg: "Book Added"
        })
        this.props.addBook(data);
      } 
      catch (error) {
        this.setState({
            msg: "error adding book"
        })
      }
}
}


function mapStateToProps(state){
    return {
        bookList : []
    }    
}

export default connect(mapStateToProps, {addBook})(AddBook); 


