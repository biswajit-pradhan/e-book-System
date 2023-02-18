export const publisherBooks= () => (dispatch) =>{
    fetch('http://localhost:8080/api/reader/booksByPublisherName/pranil')
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'BOOK_BY_PUBL_NAME',
            payload: data})
         )
};  

export const booksOnRent= () => (dispatch) =>{
    fetch('http://localhost:8080/api/publisher/getBooksOnRentByPublisherName/pranil')
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'BOOK_ON_RENT',
            payload: data})
         )
}

export const addBook = (data) => {
    return {
        type: 'ADD_EMPLOYEE',
        payload: data
    }
}

export const deleteBook=(bookId)=>{
    return (dispatch)=>{
        fetch(`http://localhost:8080/api/book/deletebook/${bookId}`,{
            method:"DELETE"
        })
        .then(response=>response.json())
        .then(data=>{
            dispatch({type:"DELETE_BOOK_SUCCESS",payload:bookId});
        })
        .catch(error=>{
            dispatch({type:"DELETE_BOOK_ERROR",payload:error});
        })
    }
}