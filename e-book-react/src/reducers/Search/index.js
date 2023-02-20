const initialState ={
    list:[]
};
//by action type it gets the data from action as payload abd and change the cloned initial state acc. to payload
const search =(state = initialState, action) =>{
    if(action.type === 'SEARCH_BOOK_BY_BOOK_NAME'){
        return { ...state, list : action.payload}
    }
    if(action.type === 'SEARCH_BOOK_BY_AUTHOR_NAME'){
        return { ...state, list : action.payload}
    }
    if(action.type === 'SEARCH_BOOK_BY_PUBLISHER_NAME'){
        return { ...state, list : action.payload}
    }
    return state;
}
export default search;