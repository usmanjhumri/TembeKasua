import { Box, Grid } from '@mui/material'
import React from 'react'
import Data from './Section_2data'
import bg from './leavebg.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Section_2.css';

const settings = {
       
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

const Section_2 = () => {
    

    return (
        <>

            <Box m={2} sx={{
              
                background: '#EAEAEA'
            }}>
                <div style={{  background: '#ffffff',  borderRadius: '20px' }}>
                    <Grid container>
                        <Grid sx={{ lineHeight: '32px' }} item xs={12} md={2}>
                            <div style={
                                {
                                    background: ` url(${bg})`, backgroundRepeat: "no-repeat",
                                    height: "200px", width: '182px'
                                }
                            }>

                                <h2 style={{ padding: '38px 0px 0px 29px' }}>Benue Markets
                                    Holding Today
                                </h2>
                                <p style={{ padding: '0px 0px 0px 29px' }}>Thusday Oct 2022</p>

                            </div>
                            <p style={{ color: '#009933', padding: '0px 0px 0px 29px', margin: '10px 0' }}>View more &gt;</p>
                        </Grid>
                        <Grid sx={{ position: 'relative', textAlign: 'center', margin: 'auto' }} item xs={12} md={10}>
                            
             

                          
                            {/* <Slider {...settings}>
                                {
                                    Data.map((item, ind) => {
                                        return (
                                            
                                                    <div>
                                        <img style={{ borderRadius: '15px', width: '100%' }} src={item.image} alt="" />
                                                    <div className="scndLast">
                                                        <p style={{ color: '#828282', fontSize: '14px' }}>Ugbema  Market</p>

                                                        <button className='btn-swiper'>Shop now</button>
                                                    </div>
                                                    </div>


                                           
                                        )
                                        
                                    })
                                }
                                </Slider> */}



                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default Section_2