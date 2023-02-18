export const allBooks= () => (dispatch) =>{
    fetch('http://localhost:8080/api/author/allauthor')
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'ALL_BOOK_BY_AUTHOR',
            payload: data})
         )
}

export const BooksByAuthorName=(b) => (dispatch) =>{
    fetch('http://localhost:8080/api/reader/booksByAuthorName/'+b)
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
