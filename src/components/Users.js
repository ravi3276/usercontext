import React, { useState } from 'react'
import { useStateValue } from '../StateProvider';
import './Users.css';
function Users({userData,id}) {
    // console.log("first",userData,id)
    const [{user},dispatch]=useStateValue();
    // console.log(user,"removeUser")
    const removeUser=(id)=>{
        dispatch({
            type:"REMOVE_USER",
            userId:id
        })
        // setUser(user.filter(user => user.id !== i));
    }
  return (
    <div className="users">
                <div className="userData">
                    <h4>{userData.name}</h4>
                    <h5>{userData.age}</h5>
                    <p>{userData.bio}</p>       
                    <button onClick={()=>removeUser(id)}>remove</button>
                </div>
    </div>
  )
}

export default Users