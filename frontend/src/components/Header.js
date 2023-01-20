import React from 'react'
import {AppBar, Button, Typography,Box,Toolbar} from '@mui/material'


const Header = () => {
  return (
    <AppBar
        position="sticky"
        sx ={{background: "linear-gradient(90deg, rgba(101,125,172,0.92) 7%, rgba(12,7,87,1) 49%, rgba(0,212,255,1) 100%)"
         }}>
      <Toolbar>
        <Typography variant ="h4">BlogsApp</Typography>
        <Box display="flex" marginLeft="auto">
          <Button variant="contained" sx={{margin:'1',  borderRadius:10}} color="warning">Login</Button>
          <Button variant="contained" sx={{margin:'1', borderRadius: 10}} color="warning">Signup</Button>
          
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;