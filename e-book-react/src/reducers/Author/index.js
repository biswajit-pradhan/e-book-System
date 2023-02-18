const initialState ={
    list:[]
};
const authorReducer =(state = initialState, action) =>{
    if(action.type === 'ALL_BOOK_ON_RENT'){
        return { ...state, list : action.payload}
    }
    if(action.type === 'ADD_BOOK'){
        return { ...state, list :[...state.list, action.payload]}
    }
    if(action.type === 'BOOK_BY_AUTHOR_NAME'){
        return { ...state, list : action.payload}
    }
    return state;
}

export default authorReducer;