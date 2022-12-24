import React from 'react'
import {Box, Container, Grid, Typography} from '@mui/material'
import IMG from './cow.png'

const PriNavbar = () => {
  return (
    <>
    <Box pt={2} mb={0.4}>

        
        <Container>
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
         }}>
            <div>
            <Typography className='prinav-item' sx={{
                fontFamily:"Archivo",

            }}>
                sell on <span style={{
                    color:"#000",
                    fontWeight:600
                }}> tembekasua</span>
            </Typography>
            </div>

            <div style={{
                display:"flex",
                justifyContent:"space-evenly"
            }}>
                <Typography className='prinav-item' sx={{
                    margin:"0px 3rem",
                    fontFamily:"Archivo"

                }}>
                    help
                </Typography>
                <Typography className='prinav-item' sx={{
                    fontFamily:"Archivo"

                }}>
                Buyer Protection
                </Typography>
            </div>
        </Box>
            <Grid container>
                <Grid item xs={12} md={2}>
                    
                </Grid>
              
            </Grid>
        </Container>
    </Box>
    
    </>
  )
}

export default PriNavbar