import * as actionTypes from "../actions/Actions"

const intialState = {
    data : [],
};

const Reducer = (state= intialState,action) =>{
    switch(action.type){
        case actionTypes.GET_USER:
            return{
                ...state,
                data: action.data
            };
        default: return state;
    }
}
export default Reducer;