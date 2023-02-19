const initialState ={
    list:[]
};
const search =(state = initialState, action) =>{
    if(action.type === 'SEARCH_BOOK_BY_NAME'){
        return { ...state, list : action.payload}
    }
    return state;
}
export default search;