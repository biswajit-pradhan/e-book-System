export const SearchByBookNamePost=(srh) => (dispatch) =>{
    // try {
        fetch('http://localhost:8080/api/reader/bookByBookName/'+srh)
    .then(response=> response.json())
    .then(data=> dispatch({
            type: 'SEARCH_BOOK_BY_BOOK_NAME',
            payload: data})
         )
    // } catch (error) {
    //     if (error.response.status === 400) {
    //       dispatch({
    //         type: 'SEARCH_BOOK_BY_BOOK_NAME',
    //         payload: { list: [] },
    //       });
    //       // update the error message state with the error message
    //       this.setState({
    //         errors: { bookName: "Please enter a valid book name" },
    //       });
    //     } else {
    //       console.log(error);
    //     }
    // }  
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