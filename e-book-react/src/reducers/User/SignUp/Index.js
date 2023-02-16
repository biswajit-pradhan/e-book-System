const initialState= {
    list: []
};

const userSignUp = (state =initialState, action)=>{

    //payload object(todo) will get added in list
    if(action.type === 'ADD_USER_SIGNUP'){
        return {...state,  list : [...state.list, action.payload]}
    }
    return state;
};

export default userSignUp; 