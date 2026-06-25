import React, { use, useState,memo } from 'react'

 export default function DemoReactMemoChild({countIncrement}) {
 
console.log("Child rendered");
  return (
    <>  

   

   
    <div>DemoReactMemoChild</div>
    <button onClick={countIncrement}> Incrment from child </button>
  </>
  )
}
// export default React.memo(DemoReactMemoChild);