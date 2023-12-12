import { TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <Typography variant='h4'>Signup</Typography><br />
        <TextField variant='outlined' label='name' ></TextField><br /><br />
        <TextField variant='outlined' label='email'></TextField><br /><br />
        <TextField variant='outlined' label='password'></TextField> <br /><br />   
        <button>Submit</button>
     </div>
  )
}

export default Signup