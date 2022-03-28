import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUser, getUserData } from "../redux/actions/Actions";


const Crud = ({apiData,get}) => {

    useEffect(()=>{
        get()
        // console.log(apiData)
        localStorage.clear()
    },[])
  return (
    <div>
    <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">userName</th>
                <th scope="col">email</th>
              </tr>
            </thead>
            <tbody>
    {apiData.map((id,index)=>{
        return(
            
              <tr key={index}>
                <td>{apiData[index].id}</td>
                <td>{apiData[index].name}</td>
                <td>{apiData[index].username}</td>
                <td>{apiData[index].email}</td>
              </tr>
            
        )
    })}

    </tbody>
          </table>
     
    </div>
  );
};

 const mapStateToProps=(state)=>{
    return{
      apiData: state.data,
    };
};
const mapDispatchToProps = (dispatch)=>{
    return{
        get : ()=> dispatch(getUserData())
    };
};


export default  connect(mapStateToProps,mapDispatchToProps)(Crud) ;
