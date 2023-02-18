const initialState ={
    list:[]
};
const authorReducer =(state = initialState, action) =>{
    if(action.type === 'ADD_BOOK'){
        return { ...state, list :[...state.list, action.payload]}
    }
    return state;
}





export default authorReducer;