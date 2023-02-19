export const getBooksDataByReaderId= (redr) => (dispatch) =>{
    fetch('http://localhost:8080/api/readerbook/getBooksDataByReaderId/'+redr)
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'GET_ALL_READER_DATA',
            payload: data})
         )
}