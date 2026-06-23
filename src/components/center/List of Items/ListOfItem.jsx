import React from 'react'

export default function ListOfItem() {



      const cars = ["tata", "honda", "maruti", "hundai", "toyota"];
  return (
    <div>
      <h2> Car List </h2>
      <ul>
        {cars.map((value,index)=>{
         return     <li key={index}>{value}</li>
        })}
      </ul>
    </div>
  )
}
