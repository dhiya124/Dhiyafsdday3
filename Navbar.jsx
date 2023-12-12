import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>MY APP</Typography>
                <Button variant='contained' color='error'>Home</Button> &nbsp;&nbsp;
                <Button variant='contained' color='error'>Log In</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar