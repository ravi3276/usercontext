import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import './AddUser.css'
function AddUser() {
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [bio,setBio]=useState("")
    const [data,setData]=useState([])

    const [{user},dispatch]=useStateValue()
    // console.log(user,"new user")
    const addUser=()=>{
        dispatch({
            type: 'ADD_USER',
            user:{
                name: name,
                age: age,
                bio: bio
            }
        })

    }
  return (
    <div className='addUser'>
        <h1 className='title'>Add User</h1>
        <div className='userForm'>
            <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='age' onChange={(e)=>setAge(e.target.value)}/>
            <textarea placeholder="bio" rows={4} cols={5} onChange={(e)=>setBio(e.target.value)}/>
            <button type="submit" onClick={addUser}>AddUser</button>
        </div>
    </div>
  )
}

export default AddUser