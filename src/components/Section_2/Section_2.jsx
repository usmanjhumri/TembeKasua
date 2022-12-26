import { Box, Grid } from '@mui/material'
import React from 'react'
import 'react-multi-carousel/lib/styles.css';
import Data from './Section_2data'
import bg from './leavebg.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import './Section_2.css'



const Section_2 = () => {


    return (
        <>

            <Box sx={{
                paddingBottom: '30px'
                , background: '#EAEAEA'
            }}>
                <div style={{ width: '90%', margin: 'auto', background: '#ffffff', padding: '20px', borderRadius: '20px' }}>
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
                            <div style={{ display: 'flex' }}>
                                <h1 className='preArrow'> &lt;</h1>
                                <h1 className='nextArrow'> &gt; </h1>
                            </div>
                            <Swiper
                                style={{ width: '92%' }}
                                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                navigation={{
                                    nextEl: ".nextArrow",
                                    prevEl: ".preArrow",
                                    enabled: true
                                }}
                                spaceBetween={30}
                                slidesPerView={4}
                                autoplay={{ delay: 3000 }}
                                loop
                                breakpoints={{

                                    // when window width is >= 320px

                                    200: {
                                        slidesPerView: 1,

                                    },
                                    320: {
                                        slidesPerView: 1,

                                    },
                                    // when window width is >= 480px
                                    480: {
                                        slidesPerView: 2
                                    },
                                    640: {
                                        slidesPerView: 3
                                    },
                                    // when window width is >= 640px
                                    750: {
                                        slidesPerView: 4,

                                    }

                                }}

                            >
                                {
                                    Data.map((item, ind) => {
                                        return (
                                            <>
                                                <SwiperSlide key={ind}><img style={{ borderRadius: '15px', width: '100%' }} src={item.image} alt="" />
                                                    <div className="scndLast">
                                                        <p style={{ color: '#828282', fontSize: '14px' }}>Ugbema  Market</p>

                                                        <button className='btn-swiper'>Shop now</button>
                                                    </div>

                                                </SwiperSlide>




                                            </>
                                        )

                                    })
                                }



                            </Swiper>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default Section_2