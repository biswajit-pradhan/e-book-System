const initialState ={
    list:[]
};
const getBooksDataByReaderId =(state = initialState, action) =>{
    if(action.type === 'GET_ALL_READER_DATA'){
        return { ...state, list : action.payload}
    }
    return state;
}
export default getBooksDataByReaderId;