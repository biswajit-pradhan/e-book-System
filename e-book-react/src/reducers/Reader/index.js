const initialState ={
    list:[]
};
const latestbook =(state = initialState, action) =>{
    if(action.type === 'GET_LATEST_BOOK'){
        return { ...state, list : action.payload}
    }
    return state;
}
export default latestbook;