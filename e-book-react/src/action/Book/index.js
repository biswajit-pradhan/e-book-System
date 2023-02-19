export let allBooks= () => (dispatch) =>{
    fetch('http://localhost:8080/api/book/getallbooks')
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'GET_ALL_BOOK',
            payload: data})
         )
}