//getting function called with or without argument and fetching the data from the data base 
export const SearchByBookNamePost=(srh) => (dispatch) =>{
        fetch('http://localhost:8080/api/reader/bookByBookName/'+srh)
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'SEARCH_BOOK_BY_BOOK_NAME',
            payload: data})
         ) 
}
export const SearchByAuthorNamePost=(srh) => (dispatch) =>{
    fetch('http://localhost:8080/api/reader/booksByAuthorName/'+srh)
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'SEARCH_BOOK_BY_AUTHOR_NAME',
            payload: data})
         )
}

export const SearchByPublisherNamePost=(srh) => (dispatch) =>{
    fetch('http://localhost:8080/api/reader/booksByPublisherName/'+srh)
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'SEARCH_BOOK_BY_PUBLISHER_NAME',
            payload: data})
         )
}