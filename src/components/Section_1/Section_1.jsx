import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import boyimage from './bannerImage.png'
import './Section_1.css'
import graph from './Component 4.png'

const Section_1 = () => {
    return (
        <>
            <Box m={2} sx={{  background: '#EAEAEA' }}>
                <div >
                    <Grid container >
                        <Grid className='mb'  item xs={12} md={8}>

                            <Box sx={{
                                  background: 'black', borderRadius: '20px',
                                  overflow: 'hidden'
                            }}>
                            <div className='boyimg' style={{
                                color: 'white',
                                 fontSize: '28px',
                                 padding: '45px 0px 45px 51px',
                                background: `url(${boyimage})`,
                                // width: '100%',
                                // height: '50%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right',
                                backgroundSize: 'contain',
                                
                            }}>

                                <h1>Buy</h1>
                                <h1 > <span style={{ color: '#60D913' }}>
                                    Agricultural Products</span> <br />at your Convienience</h1>
                            </div>
                            </Box>
                            


                        </Grid>
                        <Grid className='graph'  item xs={12} md={3}>
                                <Box sx={{
                                    display:{xs:"none", sm:"none", md:"block"}
                                }}>
                            <img src={graph} alt="graph" style={{
                                width:"100%",
                                margin:"15px 1.5rem"
                            }}/>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box sx={{ padding: '13px 2px', background: '#EAEAEA' }}>
                <div style={{ width: '90%', margin: 'auto' }}>
                    <Grid sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }} container>
                        <Grid className='minibar' item xs={4} md={1.2} >
                            <Box sx={{
                            background: '#60D913',
                            borderRadius: '20px',
                            padding:"0.5rem 0px"
                        }}>
                            <Typography sx={{
                            color: '#009933',
                            fontSize:"10px"

                            }}>Food price analysis &gt;</Typography>
                        </Box>
                        </Grid>
                        <Grid className='minibar' item xs={4} md={1.2}>Rice ₦200</Grid>
                        <Grid className='minibar' item xs={4} md={1.2}>Rice paddy ₦100</Grid>
                        <Grid className='minibar' item xs={4} md={1.2}>Soyabean ₦300</Grid>
                        <Grid className='minibar' item xs={4} md={1.2}>Yam ₦150</Grid>
                        <Grid className='minibar' item xs={4} md={1.2}>Maize ₦200</Grid>
                        <Grid className='minibar' item xs={4} md={1.2}>Fish ₦200</Grid>
                        <Grid className='minibar' item xs={4} md={1.2}>Beans ₦200</Grid>
                        <Grid className='minibar' item xs={4} md={1.2}>Guinea corn ₦200</Grid>
                        <Grid className='minibar' item xs={4} md={1.2}>Cassava ₦200</Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default Section_1