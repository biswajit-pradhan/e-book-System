const initialState ={
    list:[]
    
};
const publbook =(state = initialState, action) =>{
    if(action.type === 'BOOK_BY_PUBL_NAME'){
        return { ...state, list : action.payload}
    }
    else if(action.type === 'BOOK_ON_RENT'){
        return { ...state, list : action.payload}
    }
    else if(action.type === 'ADD_BOOK'){
        return {...state,  list : [...state.list, action.payload]}
    }
    return state;
}
export default publbook;