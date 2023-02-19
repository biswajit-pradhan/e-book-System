const initialState ={
    list:[]
};
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