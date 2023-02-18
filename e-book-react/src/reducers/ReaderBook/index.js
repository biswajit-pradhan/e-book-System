const initialState ={
    list:[]
};
const readerBook =(state = initialState, action) =>{
    if(action.type === 'GET_TRENDING_BOOK'){
        return { ...state, list : action.payload}
    }
    return state;
}
export default readerBook;