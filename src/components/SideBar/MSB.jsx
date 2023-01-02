import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WindowIcon from "@mui/icons-material/Window";
import TableChartIcon from "@mui/icons-material/TableChart";
import DeckIcon from "@mui/icons-material/Deck";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MessageIcon from "@mui/icons-material/Message";
import InfoIcon from "@mui/icons-material/Info";

const MenuContainer = {
    display: "flex",
    alignItems: "center",
    gap: { md: "20px", xs: "10px" },
    width: '180px',
    whiteSpace: 'nowrap',
    color: "grey",
    "&:hover": { color: "green", cursor: "pointer" },
}
const submenu = { "&:hover": { color: "green", cursor: "pointer" }, fontSize: '14px', fontWeight: 600 };



export default function MSB() {
    const [openSubMenu, setopenSubMenu] = useState(false);

    return (
        <Box sx={{ display: "flex" }} className='scrollbox'>
            <Box
                sx={{
                    minWidth: "auto",
                    // width: { xs: "40px", md: "200px" },
                    height: "auto",
                    background: "#FFFFFF",
                    boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.15)",
                    // "&:hover": {
                    //     WebkitTransition: "width 1s ease-in-out",
                    //     MozTransition: "width 1s ease-in-out",
                    //     OTransition: "width 1s ease-in-out",
                    //     transition: "width 1s ease-in-out",
                    //     width: { md: "220px", xs: '180px' },
                    // },
                }}
            >
                <Box
                    sx={{
                        padding: { xs: "10px", md: "20px", },
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    <Box sx={MenuContainer}>
                        <Box>
                            <HomeIcon sx={{ fontSize: "20px", color: '#828282' }} />
                        </Box>
                        <Typography fontSize={'14px'} fontWeight={600} >Home</Typography>
                    </Box>
                    <Box>
                        <Box sx={MenuContainer}>
                            <Box>
                                <WindowIcon sx={{ fontSize: "20px", color: '#828282' }} />
                            </Box>
                            <Typography fontSize={'14px'} sx={{ color: '#828282' }} fontWeight={600} >Categories</Typography>
                            <IconButton
                                onClick={() => {
                                    setopenSubMenu(!openSubMenu);
                                }}
                            >
                                {openSubMenu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                            </IconButton>
                        </Box>
                        {openSubMenu ? (
                            <Box
                                sx={{
                                    padding: "5px 50px",
                                    color: "grey",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "10px",
                                }}
                            >
                                <Typography sx={{ ...submenu, color: '#828282' }}>Grains</Typography>
                                <Typography sx={{ ...submenu, color: '#828282' }}>Tubers</Typography>
                                <Typography sx={{ ...submenu, color: '#828282' }}>Gingers</Typography>
                                <Typography sx={{ ...submenu, color: '#828282' }}>Fish</Typography>
                                <Typography sx={{ ...submenu, color: '#828282' }}>Furtilizer</Typography>
                                <Typography sx={{ ...submenu, color: '#828282' }}>Tool & Equipment</Typography>
                            </Box>
                        ) : null}
                    </Box>
                    <Box sx={MenuContainer}>
                        <Box>
                            <LocationOnIcon sx={{ fontSize: "20px", color: '#828282' }} />
                        </Box>
                        <Typography fontSize={'14px'} sx={{ color: '#828282' }} fontWeight={600}>Markets</Typography>
                    </Box>

                    <Box sx={MenuContainer}>
                        <Box>
                            <TableChartIcon sx={{ fontSize: "20px", color: '#828282' }} />
                        </Box>
                        <Typography fontSize={'14px'} sx={{ color: '#828282' }} fontWeight={600}>All Products</Typography>
                    </Box>

                    <Box sx={MenuContainer}>
                        <Box>
                            <DeckIcon sx={{ fontSize: "20px", color: '#828282' }} />
                        </Box>
                        <Typography fontSize={'14px'} sx={{ color: '#828282' }} fontWeight={600}>Vendors</Typography>
                    </Box>

                    <Box sx={MenuContainer}>
                        <Box>
                            <LocalShippingIcon sx={{ fontSize: "20px", color: '#828282' }} />
                        </Box>
                        <Typography fontSize={'14px'} sx={{ color: '#828282' }} fontWeight={600}>Logistics</Typography>
                    </Box>

                    <Box sx={MenuContainer}>
                        <Box>
                            <MessageIcon sx={{ fontSize: "20px", color: '#828282' }} />
                        </Box>
                        <Typography fontSize={'14px'} sx={{ color: '#828282' }} fontWeight={600}>Contact Us</Typography>
                    </Box>

                    <Box sx={MenuContainer}>
                        <Box>
                            <InfoIcon sx={{ fontSize: "20px", color: '#828282' }} />
                        </Box>
                        <Typography fontSize={'14px'} sx={{ color: '#828282' }} fontWeight={600}>About</Typography>
                    </Box>
                </Box>
            </Box>
            {/* <div>
                {
                    childComponent
                }

            </div> */}
        </Box>
    );
}
