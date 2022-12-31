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
import MainPage from "../MainPage/MainPage";
import PriNavbar from '../PriNavbar/PriNavbar'
import NavBar from '../NavBar/NavBar'
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import './SideBar.css'
import Popup from "../Popup";

const MenuContainer = {
  display: "flex",
  alignItems: "center",
    gap: { md: "20px", xs: "10px" },
    width: '180px',
  whiteSpace:'nowrap',
  color: "grey",
  "&:hover": { color: "green", cursor: "pointer" },
}
const submenu = { "&:hover": { color: "green", cursor: "pointer" } };

const SideBar = ({childComponent}) => {
  const [openSubMenu, setopenSubMenu] = useState(false);
  return (
    <div>
      <Box>
      <PriNavbar/>
      <NavBar/>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              minWidth: "auto",
              width: { xs: "40px", md: "200px" },
              height: "auto",
              // overflow: "hidden",
              background:"#FFFFFF",
              // marginLeft:{xs:"1.4rem",md:"4rem"},
              boxShadow:"0px 4px 6px -2px rgba(0, 0, 0, 0.15)",
              "&:hover": {
                WebkitTransition: "width 1s ease-in-out",
                MozTransition: "width 1s ease-in-out",
                OTransition: "width 1s ease-in-out",
                transition: "width 1s ease-in-out",
                width:{md:"220px",xs:'180px'},
              },
            }}
          >
            <Box
              sx={{
                padding: { md: "20px", xs: "10px" },
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <Box sx={MenuContainer}>
                <Box>
                  <HomeIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>
                  <Link className="side_nav_links" to='/'>
                  Home
                  </Link>
                  </Typography>
              </Box>
              <Box>
                <Box sx={MenuContainer}>
                  <Box>
                    <WindowIcon sx={{ fontSize: "30px" }} />
                  </Box>
                  <Typography>
                    <Link className="side_nav_links" to='/Categories'>
                    Categories
                    </Link>
                    </Typography>
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
                    <Typography sx={submenu}>
                      <Link className="side_nav_links" to="/Grains">
                         Grains
                         </Link>
                      </Typography>
                    <Typography sx={submenu}>
                      <Link className="side_nav_links" to="/Tubers">
                         Tubers
                         </Link>
                         </Typography>
                    <Typography sx={submenu}>
                      <Link className="side_nav_links" to="/Gingers">
                         Gingers
                         </Link>
                         </Typography>
                    <Typography sx={submenu}>
                      <Link className="side_nav_links" to="/Fish">
                      Fish
                      </Link>
                       </Typography>
                    <Typography sx={submenu}>
                      <Link className="side_nav_links" to="/Furtilizer"> 
                      Furtilizer
                      </Link>
                      </Typography>
                    <Typography sx={submenu}>
                      <Link className="side_nav_links" to="/Tool_&_Equipment">
                         Tool & Equipment
                         </Link>
                        </Typography>
                  </Box>
                ) : null}
              </Box>
              <Box sx={MenuContainer}>
                <Box>
                  <LocationOnIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>
                  <Link className="side_nav_links" to='/Markets'>
                  Markets
                  </Link>
                  </Typography>
              </Box>

              <Box sx={MenuContainer}>
                <Box>
                  <TableChartIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>
                 <Link className="side_nav_links" to='/'>
                   All Products
                   </Link>
                   </Typography>
              </Box>

              <Box sx={MenuContainer}>
                <Box>
                  <DeckIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>
                 <Link className="side_nav_links" to='/Vendors'>
                   Vendors
                   </Link>
                   </Typography>
              </Box>

              <Box sx={MenuContainer}>
                <Box>
                  <LocalShippingIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>
                 <Link className="side_nav_links" to='/Logistics'>
                   Logistics
                   </Link>
                   </Typography>
              </Box>

              <Box sx={MenuContainer}>
                <Box>
                  <MessageIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>
                 <Link className="side_nav_links" to='/Contact_Us'>
                   Contact Us
                   </Link>
                   </Typography>
              </Box>

              <Box sx={MenuContainer}>
                <Box>
                  <InfoIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>
                 <Link className="side_nav_links" to='/aboutUs'>
                   About
                   </Link>
                   </Typography>
              </Box>
            </Box>
          </Box>
          <div>
{
  childComponent
}

          </div>
        </Box>
        <Footer/>
        <Popup/>

      </Box>
    </div>
  );
};

export default SideBar;
