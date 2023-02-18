const initialState ={
    list:[]
};
const allPublisher =(state = initialState, action) =>{
    if(action.type === 'GET_ALL_PUBLISHER'){
        return { ...state, list : action.payload}
    }
    return state;
}
export default allPublisher;