import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Data from './MSection_3data'
import ReactStars from "react-rating-stars-component";

const MSection_3 = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <Box sx={{ background: '#EAEAEA', padding: '40px 0px' }}>
                <div style={{ width: '90%', margin: 'auto' }}>
                    <Grid sx={{ background: '#FFFFFF', padding: '16px 40px', borderRadius: '20px' }} container>
                        <Grid item xs={12} md={12}>
                            <h3>More to love</h3>
                        </Grid>
                        <Grid sx={{ margin: '10px 0px' }} item xs={12} md={12}>
                            <Divider />
                        </Grid>

                        {
                            Data.map((item) => {
                                return (
                                    <>
                                        <Grid item xs={12} sm={6} md={2} >
                                            <Box sx={{ padding: "20px" }}>

                                                <img
                                                    style={{ borderRadius: "15px", width: "100%" }}
                                                    src={item.Image} alt='image' />
                                                <Typography style={{
                                                    fontFamily: 'Archivo',
                                                    fontStyle: " normal",
                                                    fontWeight: 500,
                                                    lineHeight: '123.99%',
                                                    color: "#828282",
                                                    fontSize: '12px',
                                                    padding: '05px 0px'
                                                }}>
                                                    {item.name}
                                                </Typography>
                                                <Box style={{
                                                    display: 'flex',
                                                    justifyContent: "space-between", width: "100%"
                                                }}>
                                                    <Typography style={{
                                                        display: "flex",
                                                        alignItems: "center", margin: "0px",
                                                        fontFamily: 'Arial',
                                                        fontStyle: "normal",
                                                        fontWeight: 700,
                                                    }}>
                                                        {item.Disprice}
                                                    </Typography>
                                                    <div >
                                                        <ReactStars
                                                            count={5}
                                                            onChange={ratingChanged}
                                                            size={15}
                                                            activeColor="#ffd700"
                                                        />

                                                    </div>
                                                </Box>
                                                <Typography style={{
                                                    color: "#828282",
                                                    fontStyle: "normal",
                                                    fontWeight: 500,
                                                    lineHeight: "123.99%",
                                                    fontSize: '12px',
                                                    textDecoration: 'line-Through'

                                                }}>
                                                    {item.OrigPrice}
                                                </Typography>

                                            </Box>

                                        </Grid>
                                    </>
                                )
                            })
                        }


                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default MSection_3