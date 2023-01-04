import React, {useState} from 'react'
import { Box, Grid, TextField } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import Data from './MSection_1data'
import './MSection_1.css'
// import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



const MSection_1 = () => {
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Box sx={{ background: '#EAEAEA' }}>
                <div style={{ width: '90%', margin: 'auto' }}>
                    <Grid sx={{ padding: '30px 0px' }} container>
                        <Grid sx={{ textAlign: 'center  ' }} item xs={12} md={12}>
                            <h1 style={{ fontSize: '36px', marginBottom: '4px' }}><span style={{ color: '#009933' }}> Benue Markets </span> Holding Today</h1>
                        </Grid>
                        <Grid style={{ margin: 'auto' }} item xs={12} md={3}>
                            <p style={{
                                color: '#828282', textAlign: 'center',
                                background: 'white',
                                padding: '9px 0px',
                                borderRadius: '15px 15px 0px 0px'
                            }}>Wednesday, 19 Oct 2022 | 11h : 46m : 03s </p>
                        </Grid>
                        {/* ////////CALANDER////////// */}
                        <Grid container style={{ background: '#60D913', borderRadius: '10px' }}>
                            <Grid sx={{ background: '#009933', margin: '22px 17px', borderRadius: '10px', display: 'flex', justifyContent: 'space-around', color: '#60D913', padding: '16px 0px' }} xs={12} md={12}>
                                <p style={{ color: 'white' }}>Today<br /> 19 Oct.</p>
                                <p className='weaklyP'>Thur<br /> 20 Oct.</p>
                                <p className='weaklyP'>Fri<br /> 21 Oct.</p>
                                <p className='weaklyP'>Sat<br /> 22 Oct.</p>
                                <p className='weaklyP'>Sun<br /> 23 Oct.</p>
                                <p className='weaklyP'>Mon<br /> 24 Oct.</p>
                                <p className='weaklyP'>Tue<br /> 25 Oct.</p>
                                <p className='weaklyP'>Wed<br /> 26 Oct.</p>
                                <p className='weaklyP'>Thur<br /> 27 Oct.</p>
                                <p className='weaklyP'>Fri<br /> 28 Oct.</p>
                                <div style={{
                                    display: 'flex', alignItems: 'center', color: '#FFFFFF'
                                }}>
                                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <p style={{ cursor: 'pointer' }}>
                                            <DesktopDatePicker
                                                label="View calendar"
                                                inputFormat="MM/DD/YYYY"
                                                value={value}
                                                onChange={handleChange}
                                                renderInput={(params) => <TextField {...params} />}
                                            /></p>
                                    </LocalizationProvider> */}

                                </div>
                            </Grid>
                            <Grid sx={{ position: 'relative', margin: 'auto' }} xs={12} md={11}>
                                <div style={{ display: 'flex' }}>
                                    <h1 className='preArrowM'> &lt; </h1>
                                    <h1 className='nextArrowM'> &gt; </h1>
                                </div>
                                <Swiper
                                    style={{ width: '92%' }}
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    navigation={{
                                        nextEl: ".nextArrowM",
                                        prevEl: ".preArrowM",
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
                                                    <div>
                                                        <SwiperSlide key={ind} style={{ textAlign: 'center' }}><img style={{ borderRadius: '15px', width: '90%', }} src={item.image} alt="" />
                                                            <p style={{ color: '#FFFFFF', fontSize: '14px' }}>Ugbema  Market</p>


                                                            <button className='btn-swiperM'>Shop now</button>


                                                        </SwiperSlide>


                                                    </div>

                                                </>
                                            )

                                        })
                                    }



                                </Swiper>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box sx={{ background: '#EAEAEA', paddingBottom: '25px' }}>
                <div style={{ width: '90%', margin: 'auto' }}>
                    <Grid sx={{ justifyContent: 'center' }} container>

                        <Grid sx={{ display: 'flex', justifyContent: 'center', background: '#FFFFFF', borderRadius: '20px', padding: '15px 0px' }} item xs={12} md={12}>
                            <h3 style={{ color: '#009933', marginRight: '10px' }}>Best Selling</h3>
                            <h3 style={{ color: '#BDBDBD', marginLeft: '10px' }}>Hottest Deals</h3>


                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default MSection_1