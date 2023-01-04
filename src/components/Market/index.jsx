import React from 'react'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import {indexArray, MoreToLove} from './MarketArray'
import ReactStars from 'react-rating-stars-component'
import Signup from '../Signup/Signup/Signup'
import './index.css'


const Categories = () => {
  return (
    <div>
      <Box mt={6} ml={1} mb={4}>
    <Box>
        <Typography sx={{
            fontSize:"36px",
            fontWeight:700,
            fontFamily:'Archivo',
            color:"#000000"
        }}>Categories</Typography>
    </Box>
            <Grid container>
               {
                indexArray.map((item, ind) =>{
                    return(
                        <>
                        
                        <Grid item xs={12} md={4} key={ind}>
                    <Box className='market-box' sx={{
                        background:"#FFFFFF",
                        borderRadius:"10px",
                        padding:"30px 50px",
                        margin:"1rem 1rem",
                        cursor:"pointer"

                        // width:"400px"

                    }}>
                        <Typography  sx={{
                            color:"#60D913",
                            fontSize:"24px",
                            fontWeight:700,
                            fontFamily:"Archivo",
                            // textAlign:"left"

                        }}>
                            {item.title}
                        </Typography>

                        <Typography className='market-box-typo' sx={{
                            color:"#828282",
                            fontSize:"16px",
                            fontWeight:400,
                            fontFamily:"Archivo",
                            textAlign:"left"

                            
                        }}>
                       {item.subtitle}
                        
                        </Typography>
                        <Typography className='market-box-typo' sx={{
                            color:"#828282",
                            fontSize:"16px",
                            fontWeight:400,
                            fontFamily:"Archivo",
                            textAlign:"left"

                            
                        }}>
                       {item.subtitleone}
                        
                        </Typography>
                    </Box>
                </Grid>
                        </>
                    )
                })
               }
               


                
            </Grid>



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
        
      </Box>



      <Signup/>
    </div>
  )
}

export default Categories
