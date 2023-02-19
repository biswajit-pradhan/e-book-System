export const allBooksOnRent= () => (dispatch) =>{
    fetch('http://localhost:8080/api/author/getBooksOnRentByAuthorName/chetan')
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'ALL_BOOK_ON_RENT',
            payload: data})
         )
}

export const BooksByAuthorName=() => (dispatch) =>{
    fetch('http://localhost:8080/api/reader/booksByAuthorName/chetan bhagat')
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
