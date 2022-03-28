import axios from "../../Instance";

export const  GET_USER = "GET_USER";
export const DELETE_USER = "DELETE_USER";

export const getUser = (data)=>{
return{
    type : GET_USER,
    data
}
}


export const getUserData = () =>{
    console.log(">>>>>>>>>Helooooo")
    return async (dispatch) =>{
        try {
            const res = await axios.get("/users");
            dispatch(getUser(res.data))
            console.log(res.data)
        }catch(err){
            console.log("the error is there in API call try use different API link")
        }
    }
}