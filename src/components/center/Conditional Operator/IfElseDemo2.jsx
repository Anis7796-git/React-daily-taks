import React from 'react'

export default function IfElseDemo2() {
    console.log("condition called")
    const x = 5;
    if (x % 2 === 0) {
        return <>  <h2>Is Even</h2>
        <h2>Is Odd</h2></>
      
    } else {
         return <>  
        <h2>Is Odd</h2>
         <h2>Is Even</h2>
        </>
    }
}


