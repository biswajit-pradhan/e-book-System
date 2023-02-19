export const getBooksDataByReaderId= () => (dispatch) =>{
    fetch('http://localhost:8080/api/readerbook/getBooksDataByReaderId/27')
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'GET_ALL_READER_DATA',
            payload: data})
         )
}