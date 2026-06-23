import React from 'react'

export default function Demo1ConditionalOperator() {
  const x= 4;
    return (
   
    <h1>{x % 2 === 0 ? `${x} isEven`  : `${x} is odd` }</h1>
  )
}
