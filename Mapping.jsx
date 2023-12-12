import React, { useState } from 'react'

const Mapping = () => {
    var [names,setNames]= useState(["dhiya","sona","irfan"])
  return (
     <div>
        <ol>
            {names.map((value,index)=>{
                return(
                    <li>{value}</li>
                )
            })}
        
        </ol>
     </div>
  )
}

export default Mapping