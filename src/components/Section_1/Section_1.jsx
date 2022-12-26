import { Box, Grid } from '@mui/material'
import React from 'react'
import boyimage from './bannerImage.png'
import './Section_1.css'
import graph from './Component 4.png'

const Section_1 = () => {
    return (
        <>
            <Box sx={{ paddingTop: '20px', background: '#EAEAEA' }}>
                <div style={{ width: '90%', margin: 'auto' }}>
                    <Grid container style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Grid className='mb' style={{
                            display: 'flex', paddingTop: '0', background: 'black', borderRadius: '20px',
                            overflow: 'hidden'
                        }} item xs={12} md={9}>
                            <div className='boyimg' style={{
                                color: 'white', fontSize: '28px', padding: '45px 0px 45px 51px',
                                background: `url(${boyimage})`,
                                width: '100%',
                                // height: '50%',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right',
                                backgroundSize: 'contain'
                            }}>

                                <h1>Buy</h1>
                                <h1 > <span style={{ color: '#60D913' }}>
                                    Agricultural Products</span> <br />at your Convienience</h1>
                            </div>

                            <div style={{

                            }}>

                            </div>


                        </Grid>
                        <Grid className='graph' style={{ padding: '0' }} item xs={12} md={3}>

                            <img src={graph} alt="graph" />

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
                            padding: '10px 10px',
                            borderRadius: '20px',
                            color: '#009933',
                            textAlign: 'center'
                        }}>Food price analysis &gt;</Box>
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