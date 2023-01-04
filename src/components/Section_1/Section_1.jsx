import { Box, Grid } from '@mui/material'
import React from 'react'
import boyimage from './bannerImage.png'
import './Section_1.css'
import graph from './Component 4.png'
import Jump from 'react-reveal/Jump';

const Section_1 = () => {
    return (
        <>
            <Box sx={{ paddingTop: '20px', background: '#EAEAEA', marginTop: '10px' }}>
                <div style={{ width: '90%', margin: 'auto' }}>
                    <Grid container style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <Grid className='mb' style={{
                            display: 'flex', paddingTop: '0', background: 'black', borderRadius: '20px',
                            overflow: 'hidden'
                        }} item xs={12} md={9}>
                            <div className='boyimg' style={{
                                color: 'white', fontSize: '17px', padding: '45px 0px 45px 51px',
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
                        <Grid className='graph' style={{ padding: '0' }} item xs={12} md={2.9}>

                            <img style={{ width: '100%' }} src={graph} alt="graph" />

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
                        <Grid className='minibar' item xs={4} md={1.9} sx={{
                            background: '#60D913',
                            padding: '10px 0px',
                            borderRadius: '20px',
                            color: '#009933',
                            textAlign: 'center'
                        }}>Food price analysis &gt;</Grid>
                        <Grid className='minibar' item xs={4} md={1.1}><Jump> Rice ₦200</Jump></Grid>
                        <Grid className='minibar' item xs={4} md={1.2}><Jump> Rice paddy ₦100</Jump></Grid>
                        <Grid className='minibar' item xs={4} md={1.1}><Jump> Soyabean ₦300</Jump></Grid>
                        <Grid className='minibar' item xs={4} md={1.1}><Jump> Yam ₦150</Jump></Grid>
                        <Grid className='minibar' item xs={4} md={1.1}><Jump> Maize ₦200</Jump></Grid>
                        <Grid className='minibar' item xs={4} md={1.1}><Jump> Fish ₦200</Jump></Grid>
                        <Grid className='minibar' item xs={4} md={1.1}><Jump> Beans ₦200</Jump></Grid>
                        <Grid className='minibar' item xs={4} md={1.2}><Jump> Guinea corn ₦200</Jump></Grid>
                        <Grid className='minibar' item xs={4} md={1.1}><Jump> Cassava ₦200</Jump></Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default Section_1