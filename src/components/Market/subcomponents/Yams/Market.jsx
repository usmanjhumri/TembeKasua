import React from 'react'
import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import {FirstLine, SecondLine, ThirdLine, MoreToLove} from '../Market/MarketArray'
import ReactStars from 'react-rating-stars-component'
import './Market.css'




    

const Yams = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
   
  return (
    <div>
      

      <Box ml={10} mt={8}>
        <Typography sx={{
            fontSize:"35px",
            fontWeight:700,
            fontFamily:"Archivo",
            color:"#000000",
            fontStyle:"bold",

        }}>
        Categories <span className='market_tubers_yam'> &#62; Tubers &#62; Yam</span>
        </Typography>
      </Box>

      <Box mt={6} ml={10} sx={{
    background:"#FFFFFF",
    borderRadius:"10px",
    padding:"1rem 1.5rem"
}}>
  
  <div sx={{ width: "100%", padding: "20px", }}>
                    <Grid container >
                        {
                            FirstLine.map((item, ind) => {
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
                                                    fontSize:"12px"
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
                                                        fontSize:"15px"
                                                        
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
                                                    lineHeight: "123.99%"
                                                }}>
                                                    {item.OrigPrice}
                                                </Typography>

                                                <div style={{
                                                    textAlign:"center"
                                                }}>
                                                    <button className='AddToBsktBtn' style={{
                                                        padding:"1rem 2rem",
                                                        borderRadius:"12px",
                                                        background:"transparent",
                                                        marginTop:"1rem",
                                                        border:"2px solid #60D913",
                                                        color:"#60D913",
                                                        fontSize:"16px",
                                                        fontWeight:600,
                                                        fontFamily:'Archivo',
                                                        cursor:"pointer"
                                                    }}>Add to Basket</button>
                                                </div>

                                            </Box>

                                        </Grid>
                                    </>
                                )
                            })
                        }


                    </Grid >
                </div >

{/* second layer */}
                <div sx={{ width: "100%", padding: "20px", }}>
                    <Grid container >
                        {
                            SecondLine.map((item, ind) => {
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
                                                    fontSize:"12px"
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
                                                        fontSize:"15px"
                                                        
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
                                                    lineHeight: "123.99%"
                                                }}>
                                                    {item.OrigPrice}
                                                </Typography>

                                                <div style={{
                                                    textAlign:"center"
                                                }}>
                                                    <button className='AddToBsktBtn' style={{
                                                        padding:"1rem 2rem",
                                                        borderRadius:"12px",
                                                        background:"transparent",
                                                        marginTop:"1rem",
                                                        border:"2px solid #60D913",
                                                        color:"#60D913",
                                                        fontSize:"16px",
                                                        fontWeight:600,
                                                        fontFamily:'Archivo',
                                                        cursor:"pointer"
                                                    }}>Add to Basket</button>
                                                </div>

                                            </Box>

                                        </Grid>
                                    </>
                                )
                            })
                        }


                    </Grid >
                </div >

{/* third layer */}

<div sx={{ width: "100%", padding: "20px", }}>
                    <Grid container >
                        {
                            ThirdLine.map((item, ind) => {
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
                                                    fontSize:"12px"
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
                                                        fontSize:"15px"
                                                        
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
                                                    lineHeight: "123.99%"
                                                }}>
                                                    {item.OrigPrice}
                                                </Typography>

                                                <div style={{
                                                    textAlign:"center"
                                                }}>
                                                    <button className='AddToBsktBtn' style={{
                                                        padding:"1rem 2rem",
                                                        borderRadius:"12px",
                                                        background:"transparent",
                                                        marginTop:"1rem",
                                                        border:"2px solid #60D913",
                                                        color:"#60D913",
                                                        fontSize:"16px",
                                                        fontWeight:600,
                                                        fontFamily:'Archivo',
                                                        cursor:"pointer"
                                                    }}>Add to Basket</button>
                                                </div>

                                            </Box>

                                        </Grid>
                                    </>
                                )
                            })
                        }


                    </Grid >
                </div >


</Box>

<Box mt={10} mb={10} sx={{
    textAlign:"center "
}}>
    <button style={{
            background:"#60D913",
            borderRadius:"10px",
            padding:"11px 26px",
            color:"#FFFFFF",
            borderColor:"#60D913",
            fontSize:"16px",
            fontWeight:600,
            letterSpacing:"1px",
            cursor:"pointer"

    }}>See more&#8744; </button>
</Box>

<Box ml={10} mb={4} sx={{
    background:"#FFFFFF",
    borderRadius:"10px",
    padding:"1rem 1.5rem"
}}>
    <Box>

        <Container>
                                    <Typography mb={1} sx={{
                                        fontSize:"16px",
                                        fontWeight:700,
                                        fontFamily:'Archivo',
                                        color:"#000000",
                                    }}>More to love</Typography>

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
                                                    fontSize:"12px"
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
                                                        fontSize:"15px"
                                                        
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
                                                    lineHeight: "123.99%"
                                                }}>
                                                    {item.OrigPrice}
                                                </Typography>

                                                {/* <div style={{
                                                    textAlign:"center"
                                                }}>
                                                    <button className='AddToBsktBtn' style={{
                                                        padding:"1rem 2rem",
                                                        borderRadius:"12px",
                                                        background:"transparent",
                                                        marginTop:"1rem",
                                                        border:"2px solid #60D913",
                                                        color:"#60D913",
                                                        fontSize:"16px",
                                                        fontWeight:600,
                                                        fontFamily:'Archivo',
                                                        cursor:"pointer"
                                                    }}>Add to Basket</button>
                                                </div> */}

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

export default Yams
