import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ReactStars from "react-rating-stars-component";
import Data from './MSection_2Data'
import Progress from 'react-progressbar';

const MSection_2 = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <>
            <Box m={2} sx={{ background: '#EAEAEA' }}>
                <div style={{   }}>
                    <Grid sx={{ background: '#FFFFFF', borderRadius: '20px',  }} container>
                        {
                            Data.map((item) => {
                                return (
                                    <>
                                        <Grid item xs={12} sm={6} md={2} >
                                            <Box sx={{ padding: "10px" }}>

                                                <img
                                                    style={{ borderRadius: "15px", width: "100%" }}
                                                    src={item.Image} alt='image' />
                                                <Typography style={{
                                                    fontFamily: 'Archivo',
                                                    fontStyle: " normal",
                                                    fontWeight: 500,
                                                    // lineHeight: '123.99%',
                                                    color: "#828282",
                                                    fontSize: '12px',
                                                    // padding: '05px 0px'
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
                                                        <p style={{ fontSize: '10px' }}>300 items left</p>

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
                                                <div>

                                                    <Progress completed={75} />
                                                </div>
                                                <div style={{ textAlign: 'center' }}>


                                                  
                                                <button style={{ 
                                                        color: "#60D913", 
                                                        background: '#FFFFFF',
                                                         border: '2px solid #60D913', 
                                                         fontWeight: 'bolder',
                                                          borderRadius: "10px",
                                                           padding: '8px 6px', 
                                                           marginTop: '1rem',
                                                           fontSize:"16px",
                                                           cursor:"pointer" 
                                                           }}>Add to Basket</button>
                                                </div>

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

export default MSection_2