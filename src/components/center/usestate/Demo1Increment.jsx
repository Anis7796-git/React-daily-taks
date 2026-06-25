


import React, { useState } from 'react'

export default function Demo1Increment() {

    let [count, setState]=useState(0);


function increment(){

 setState(count+1);

}
    
  return (
    <div>demo1Increment
   <h2>Count:{count}</h2>
<button onClick={increment}>click Me </button>
    </div>
    
  )
}


