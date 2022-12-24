import React from 'react'
import { Box, Container, Grid } from '@mui/material'
import './NavBar.css'

import NAV_LOGO from './nav-logo.png'

const NavBar = () => {
  return (
    <>
    <Box sx={{
        background:"#FFFFFF",
        boxShadow:"0px 4px 6px -2px rgba(0, 0, 0, 0.15)",
        padding:"0.5rem"
    }}>
            <Container>

                <Box sx={{
                    display:"flex"
                }}>
                    <div style={{
                        textAlign:"left"
                    }}>
                        <img src={NAV_LOGO} style={{
                        

                        }} alt="" />

                    </div>
                    <div style={{
                        margin:"1.2rem 5rem"
                    }}>
                    <input type="text" placeholder='Search food items, classification and categories' />

                    </div>

                </Box>



                <Grid container>

                </Grid>
            </Container>
    </Box>
    </>
  )
}

export default NavBar