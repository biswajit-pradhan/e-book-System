export const publisherBooks= (username) => (dispatch) =>{
    fetch('http://localhost:8080/api/reader/booksByPublisherName/'+username)
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'BOOK_BY_PUBL_NAME',
            payload: data})
         )
};     

export const booksOnRent= (userName) => (dispatch) =>{
    fetch('http://localhost:8080/api/publisher/getBooksOnRentByPublisherName/'+ userName)
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
