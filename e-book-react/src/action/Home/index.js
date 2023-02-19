
//getting data from the business API
export const alllatestBook= () => (dispatch) =>{
    fetch('http://localhost:8080/api/book/lastFiveBooksAddedToDB')
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'GET_LATEST_BOOK',
            payload: data})
         )
}

//getting data from the business API
export const topFiveBooksByBorrowingDays= () => (dispatch) =>{
    fetch('http://localhost:8080/api/readerbook/topFiveBooksByBorrowingDays')
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'GET_TRENDING_BOOK',
            payload: data})
         )
}

//getting data from the business API
export const getAllPublisher= () => (dispatch) =>{
    fetch('http://localhost:8080/api/publisher/allpublisher')
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'GET_ALL_PUBLISHER',
            payload: data})
         )
}

//getting data from the business API
export const getAllAuthor= () => (dispatch) =>{
    fetch('http://localhost:8080/api/author/allauthor')
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'GET_ALL_AUTHOR',
            payload: data})
         )
}

