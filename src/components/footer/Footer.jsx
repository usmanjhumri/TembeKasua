import { Box, Grid } from '@mui/material'
import React from 'react'
import './Footer.css'
import msg from './message.png'
import call from './call.png'
import Mcard from './mastercard.png'
import visa from './visa.png'
import nurtw from './NURTW.png'
import Ptravel from './Pleasure travels.png'
import Blinks from './Benue Links.png'
import faceboook from './facebook.png'
import whatsapp from './whatsapp.png'
import ins from './ins.png'
import twitter from './twitter.png'
import linkdind from './linkedin.png'
import appleandandroid from './Group 8.png'
import lastLogo from './lastLogo.png'


const Footer = () => {
    return (
        <>
            <Box p={2} sx={{ background: '#60D913', fontFamily: 'Archivo, sans-serif' }}>
                <div style={{ width: '90%', margin: 'auto' }}>
                    <Grid container>
                        <Grid item xs={6} md={2.5} style={{ display: 'flex', alignItems: 'center', color: 'white' }}>

                            <div className="icon" style={{
                                background: 'darkgreen',
                                width: '40px',
                                height: '40px',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '5px',
                            }}>
                                <img src={msg} alt="message" />

                            </div>
                            <div className="text" style={{ fontSize: '15px' }}>
                                <p>EMAIL SUPPORT</p>
                                <p>info@tembekasua.com</p>
                            </div>
                        </Grid>
                        <Grid item xs={6} md={4.5} style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                            <div className="icon" style={{
                                background: 'darkgreen',
                                width: '40px',
                                height: '40px',
                                borderRadius: '100px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginRight: '5px',
                            }}>
                                <img src={call} alt="call" />

                            </div>
                            <div className="text" style={{ fontSize: '15px' }}>
                                <p>PHONE SUPPORT </p>
                                <p> 07035652264, 07071733333</p>
                            </div>
                        </Grid>
                        <Grid className='inputbutton' item xs={12} md={5} sx={{
                            display: 'flex',
                            justifyContent: 'end',
                            alignItems: 'center'
                        }}>
                            <div className="text" style={{ color: '#009933' }}>
                                <p style={{ fontWeight: 'bolder', fontSize: '17px' }}>Subscribe to our latest updates.</p>
                                <p><i> We don’t share any of your information.</i></p>
                            </div>
                            <div className="input" style={{ display: 'flex' }}>
                                <input type="text" placeholder='Type your email address here' style={{
                                    padding: '11px 26px',
                                    borderRadius: '7px',
                                    border: 'none',
                                    marginLeft: '10px',

                                }} />
                                <button style={{
                                    padding: '10px 10px',
                                    borderRadius: '7px',
                                    border: 'none',
                                    marginLeft: '-3px',
                                    background: 'darkGreen',
                                    color: 'white'

                                }} >Subscribe</button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box>
            <Box p={7} sx={{ background: 'black', color: '#FFFFFF', fontFamily: 'Archivo, sans-serif' }}>
                <div style={{ width: '90%', margin: 'auto' }}>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ color: '#60D913', fontSize: '14px', fontWeight: '800' }}>LET US HELP</li>
                                <li style={{ fontSize: '14px' }}>Help Center</li>
                                <li style={{ fontSize: '14px' }}>Contact Us</li>
                                <li style={{ fontSize: '14px' }}>How to shop on Tembekasua?</li>
                                <li style={{ fontSize: '14px' }}>Delivery options and timelines</li>
                                <li style={{ fontSize: '14px' }}>How to return a product on Tembekasua?</li>
                                <li style={{ fontSize: '14px' }}>Corporate and bulk purchases</li>
                                <li style={{ fontSize: '14px' }}>Report a Product</li>
                                <li style={{ fontSize: '14px' }}>Ship your package anywhere in Nigeria</li>
                                <li style={{ fontSize: '14px' }}>Dispute Resolution Policy</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{ color: '#60D913', fontSize: '14px', fontWeight: '800' }}>ABOUT TEMBEKASUA</li>
                                <li style={{ fontSize: '14px' }}>About us</li>
                                <li style={{ fontSize: '14px' }}>Terms and Conditions</li>
                                <li style={{ fontSize: '14px' }}>Privacy and Cookie Notice</li>
                            </ul>
                            <p style={{ color: '#60D913', marginTop: '40px', fontSize: '14px', fontWeight: '800' }}>PAYMENT METHODS & DELIVERY PARTNERS</p>
                            <div className="icon" style={{ padding: '25px 0px' }}>
                                <img style={{ margin: '10px' }} src={Mcard} alt="image" />
                                <img style={{ margin: '10px' }} src={visa} alt="image" />
                                <img style={{ margin: '10px' }} src={nurtw} alt="image" />
                                <img style={{ margin: '10px' }} src={Ptravel} alt="image" />
                                <img style={{ margin: '10px' }} src={Blinks} alt="image" />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <p style={{ color: '#60D913', fontSize: '14px', fontWeight: '800' }}>JOIN US ON</p>
                            <div className='icon' style={{ padding: '25px 0px' }}>
                                <a href="#" target={'_blank'}><img src={faceboook} alt="" /></a>
                                <a href="#" target={'_blank'}><img src={whatsapp} alt="" /></a>
                                <a href="#" target={'_blank'}><img src={ins} alt="" /></a>
                                <a href="#" target={'_blank'}><img src={twitter} alt="" /></a>
                                <a href="#" target={'_blank'}><img src={linkdind} alt="" /></a>
                            </div>
                            <p style={{ color: '#60D913', marginTop: '54px', fontSize: '14px', fontWeight: '800' }}>DOWNLOAD & CONNECT WITH US</p>
                            <div className='AandA' style={{ padding: '30px 0px' }} ><img src={appleandandroid} /></div>
                        </Grid>
                        <Grid sx={{
                            height: '1px',
                            background: '#ffff',
                            margin: '30px auto'
                        }} item xs={8} md={8}></Grid>
                        <Grid item xs={12} md={12}>
                            <div className='last'
                            >
                                <img src={lastLogo} alt="" />
                                <p style={{ marginLeft: '19px' }}>Copyright ©  2019-2022 Tembekasua Company S.L. All rights reserved.</p>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default Footer