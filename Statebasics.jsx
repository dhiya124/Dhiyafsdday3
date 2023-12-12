import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var Name="dhiya"
    var[fname,setFname] = useState("dhiya")
    var[Val,setVal]=useState("sona")

    const changeName= ()=>{
        console.log("clicked")
        setFname("")
    }
     
    const Inputhandler=(e)=>{
         console.log(e.target.value)
         setVal(e.target.value)
    }

  return (
    <div>
        <Typography>My Name is {fname}</Typography><br /><br />
        <TextField variant='outlined' label='enter Name' onChange={Inputhandler} value={Val}/><br />
        <Button variant='contained' onClick={changeName}>Change</Button>
    </div>
  )
}

export default Statebasics