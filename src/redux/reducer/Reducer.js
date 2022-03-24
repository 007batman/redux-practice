import * as actionTypes from "../actions/Actions"

const intialState = {
    data : [],
};

const reducer = (state= intialState,action) =>{
    switch(action.type){
        case actionTypes.GET_USER:
            return{
                ...state,
                data: action.data
            };
        default: return state;
    }
}