import React, { useEffect, useState } from 'react'

function Effect() {
    const[num,setNum]= useState(0)
    const[nums,setNums]= useState(10)
    useEffect(()=>{
        alert("clicked this button")
    },[num])
  return (
    <div>
      <button onClick={()=>{
        setNum(num+1)
      }}>  {num} clicked</button>
     
      <button onClick={()=>{
        setNums(nums+1)
      }}>  {nums} clicked</button>
    </div>
  )
}

export default Effect

