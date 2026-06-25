
import DemoReactMemoChild from './DemoReactMemoChild'
import React, { use, useState } from 'react'

export default function DemoReactMemo() {

    const [name,setName]=useState("sachine");
 
 const [childcurrentval,setcount]=useState(0);
 function handlename(e){

    setName(e.target.value);

}


    
function countIncrement(){


        setcount(childcurrentval+1);
console.log("inc");
}
  return (
    <>



<h1>Wlecome to react Memo Demo  </h1>

    <p>Count :{childcurrentval} </p>
    
    
     <p>Name :{name}</p>
    
    
    <input onChange={handlename} />

   <DemoReactMemoChild countIncrement={countIncrement}/>
    </>
  )
}
