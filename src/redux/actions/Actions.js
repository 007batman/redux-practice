import axios from "axios";

export const  GET_USER = "GET_USER";
export const DELETE_USER = "DELETE_USER";

export const getUser = (data)=>{
return{
    type : GET_USER,
    data
}
}

export const getUserData = () =>{
    return async (dispatch) =>{
        try {
            const res = await axios.get("user");
            dispatch(getUser(res.data))
        }catch(err){
            console.log("the error is there in API call try use different API link")
        }
    }
}