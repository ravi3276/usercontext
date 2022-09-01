import React from 'react'
import { useStateValue } from '../StateProvider'
import Users from './Users'

function UserList() {
  const [{user},dispatch]=useStateValue()

  return (
    <div className="userList">
        <h4 style={{color: "white"}}>UserList</h4>
        <div className="userList-container" style={{display: "flex",padding: "10px"}}>
        {
          user.map((data,i)=><Users key={i} userData={data} id={i}/>)
        }
        </div>
    </div>
  )
}

export default UserList
