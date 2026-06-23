import React from 'react'
import car from '/images/car.jpg'
export default function DisplayImage() {
    const imagepath=car;
  return (
    <>
    
    <img src={imagepath} alt="" />
    </>
  )
}
