import React from 'react'
import { Box, Button, Container, Divider, Grid, Typography } from '@mui/material'
import {FirstLine,  MoreToLove} from './FirstLine'
import ReactStars from 'react-rating-stars-component'
import Basictabss from '../BasicTabs/index';

import './Categories.css'
import RIAN from './Rian.png'

const HomePageStore = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
  return (
    <div>
<Box ml={2} mr={2}>
<Basictabss/>
</Box>


<Box sx={{ background: '#EAEAEA' }} m={4}>
                <div style={{   }}>
                    <Grid sx={{ background: '#FFFFFF', borderRadius: '20px',  }} container>
                        {
                            FirstLine.map((itm, ind) => {
                                return (
                                    <>
                                        <Grid item xs={12} sm={6} md={2} key={ind}>
                                            <Box sx={{ padding: "20px" }}>

                                                <img
                                                    style={{ borderRadius: "15px", width: "100%" }}
                                                    src={itm.img} alt='image' />
                                                <Typography style={{
                                                    fontFamily: 'Archivo',
                                                    fontStyle: " normal",
                                                    fontWeight: 500,
                                                    lineHeight: '123.99%',
                                                    color: "#828282",
                                                    fontSize: '10px',
                                                    padding: '05px 0px',

                                                }}>
                                                    {itm.name}
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
                                                        fontWeight: 800,
                                                        fontSize:"11px"
                                                    }}>
                                                        {itm.Disprice}
                                                    </Typography>
                                                    <div >
                                                        <ReactStars
                                                            count={5}
                                                            onChange={ratingChanged}
                                                            size={13}
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
                                                    {itm.OrigPrice}
                                                </Typography>
                                                <div>

                                                    {/* <Progress completed={75} /> */}
                                                </div>
                                                <div style={{ textAlign: 'center' }}>


                                                    <button style={{ 
                                                        color: "#60D913", 
                                                        background: '#FFFFFF',
                                                         border: '2px solid #60D913', 
                                                         fontWeight: 'bolder',
                                                          borderRadius: "10px",
                                                           padding: '11px 14.5px', 
                                                           marginTop: '5px',
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



            <Box ml={1} mb={4} mt={6} sx={{
    background:"#FFFFFF",
    borderRadius:"10px",
    padding:"1rem 1rem"
}}>
    <Box>

        <Container>
                                    <Typography mb={1} sx={{
                                        fontSize:"16px",
                                        fontWeight:700,
                                        fontFamily:'Archivo',
                                        color:"#000000",
                                    }}>More to love </Typography>

                                    <Divider  sx={{
                                        color:"#BDBDBD",
                                        fontWeight:800
                                        // border:"2px solid #BDBDBD",

                                    }}/>

                                    </Container>

</Box>
<div sx={{ width: "100%", padding: "20px", }}>
                    <Grid container >
                        {
                            MoreToLove.map((item, ind) => {
                                return (
                                    <>

                                        <Grid item xs={12} sm={6} md={2}  key={ind}>
                                            <Box sx={{ padding: "20px" }}>

                                                <img
                                                    style={{ borderRadius: "15px", width: "100%" }}
                                                    src={item.img} />
                                                <Typography style={{
                                                    fontFamily: 'Archivo',
                                                    fontStyle: " normal",
                                                    fontWeight: 600,
                                                    lineHeight: '123.99%',
                                                    color: "#828282",
                                                    fontSize:"11px"
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
                                                        fontWeight: 800,
                                                        fontSize:"12px"
                                                        
                                                    }}>
                                                        {item.Disprice}
                                                    </Typography>
                                                    <div >
                                                        <ReactStars
                                                            count={5}
                                                            // onChange={ratingChanged}
                                                            size={12}
                                                            activeColor="#ffd700"
                                                        />
                                                    </div>
                                                </Box>
                                                <Typography style={{
                                                    color: "#828282",
                                                    fontStyle: "normal",
                                                    fontWeight: 500,
                                                    lineHeight: "123.99%"
                                                }}>
                                                    {item.OrigPrice}
                                                </Typography>

                                               

                                            </Box>

                                        </Grid>
                                    </>
                                )
                            })
                        }


                    </Grid >
                </div >

</Box>

    </div>
  )
}

export default HomePageStore