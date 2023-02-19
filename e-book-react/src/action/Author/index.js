export const allBooksOnRent= (book) => (dispatch) =>{
    fetch('http://localhost:8080/api/author/getBooksOnRentByAuthorName/'+book)
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'ALL_BOOK_ON_RENT',
            payload: data
        })
         )
}

export const BooksByAuthorName=(username) => (dispatch) =>{
    fetch('http://localhost:8080/api/reader/booksByAuthorName/'+username)
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'BOOK_BY_AUTHOR_NAME',
            payload: data
        })
         )
}

export const addBook = (data) => {
    return{
        type:'ADD_BOOK',
        payload: data
    }
}
