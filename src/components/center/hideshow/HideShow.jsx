import React, { useState } from 'react'

export default function HideShow() {

    let [value,setStatus]= useState(true);


function hideShow(){

   setStatus(value == true ? value=false : value = true);
    


}


  return (
    <div>

        {value && 
        <h1> welcome Anis </h1>
                

        }
           <button onClick={hideShow}>{ value ? "Hide" :"Show"}</button> 
    </div>
  )
}
