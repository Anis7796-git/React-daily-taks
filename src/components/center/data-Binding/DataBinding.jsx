import React from 'react'

export default function DataBinding() {

    const user = {

        fisrtName : "Anis ",
        LastName:"Shaikh"
    }
  return (
    <>
        <div>
            <h1 style={{textAlign:"center"}}>Welcome</h1>
            <h2 style={{textAlign:"center",color:"blue"}}>First Name: {user.fisrtName}</h2>
            <h2 style={{textAlign:"center",color:"red"}} >Last Name: {user.LastName}</h2>
        </div>
    </>
)
}
