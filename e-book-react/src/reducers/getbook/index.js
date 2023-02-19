const initialState ={
    list:[]
};
const getbookbyid =(state = initialState, action) =>{
    if(action.type === 'SEARCH_BY_BOOKID'){
        return { ...state, list : action.payload}
    }
    return state;
}
export default getbookbyid;