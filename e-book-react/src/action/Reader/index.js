export const alllatestBook= () => (dispatch) =>{
    fetch('http://localhost:8080/api/book/lastFiveBooksAddedToDB')
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'GET_LATEST_BOOK',
            payload: data})
         )
}