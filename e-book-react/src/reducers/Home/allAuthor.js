//setup initial state
const initialState ={
    list:[]
};
const allAuthor =(state = initialState, action) =>{
    if(action.type === 'GET_ALL_AUTHOR'){
        return { ...state, list : action.payload}
    }
    return state;
}
export default allAuthor;