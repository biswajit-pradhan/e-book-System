import { Component } from "react"
import { connect } from "react-redux"
import { deleteBook } from "../../action/Publisher"

 export class BookList extends Component{

    // constructor(props) {
    //     super(props);
    
    //     this.state = {};
    // }

    // componentDidMount() {  
    //     this.props.deleteBook(id);
    // }   

    handleDeleteBook=(bookid)=>{
        this.props.deleteBook(bookid);
    }

    
    render(){
     

        return(
          <div>
            <h3>Book List</h3>
            <ul>
                {this.props.list.map(book=>(
                    <li key={book.id}>
                        {book.name}-{book.authorName}
                        <button onClick={()=>this.handleDeleteBook(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
          </div>
        );
    }
   
}

const mapStateToProps=(state)=> {
    return {
      list: state.publbook.list,
      error:state.publbook.error
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        deleteBook:(bookId)=>{dispatch(deleteBook(bookId))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);