export const SearchPost=(srh) => (dispatch) =>{
    fetch('http://localhost:8080/api/reader/bookByBookName/'+srh)
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'SEARCH_BOOK_BY_NAME',
            payload: data})
         )
}