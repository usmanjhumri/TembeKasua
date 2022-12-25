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
  whiteSpace:'nowrap',
  color: "grey",
  "&:hover": { color: "green", cursor: "pointer" },
};
const submenu = { "&:hover": { color: "green", cursor: "pointer" } };

const Mainpage = () => {
  const [openSubMenu, setopenSubMenu] = useState(false);
  return (
    <div>
      <Box>
        {/* <Box
          sx={{
            minHeight: "60px",
            width: "100%",
            boxShadow: "0px 0px 2px 2px rgba(10,10,10,0.9)",
          }}
        >
          Header
        </Box> */}
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              minWidth: "auto",
              width: { xs: "50px", md: "220px" },
              height: "100vh",
              overflow: "hidden",
              boxShadow: "0px 0px 2px 2px rgba(10,10,10,0.4)",
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
                <Typography>Home</Typography>
              </Box>
              <Box>
                <Box sx={MenuContainer}>
                  <Box>
                    <WindowIcon sx={{ fontSize: "30px" }} />
                  </Box>
                  <Typography>Categories</Typography>
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
                    <Typography sx={submenu}>Grains</Typography>
                    <Typography sx={submenu}>Tubers</Typography>
                    <Typography sx={submenu}>Gingers</Typography>
                    <Typography sx={submenu}>Fish</Typography>
                    <Typography sx={submenu}>Furtilizer</Typography>
                    <Typography sx={submenu}>Tool & Equipment</Typography>
                  </Box>
                ) : null}
              </Box>
              <Box sx={MenuContainer}>
                <Box>
                  <LocationOnIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>Markets</Typography>
              </Box>

              <Box sx={MenuContainer}>
                <Box>
                  <TableChartIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>All Products</Typography>
              </Box>

              <Box sx={MenuContainer}>
                <Box>
                  <DeckIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>Vendors</Typography>
              </Box>

              <Box sx={MenuContainer}>
                <Box>
                  <LocalShippingIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>Logistics</Typography>
              </Box>

              <Box sx={MenuContainer}>
                <Box>
                  <MessageIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>Contact Us</Typography>
              </Box>

              <Box sx={MenuContainer}>
                <Box>
                  <InfoIcon sx={{ fontSize: "30px" }} />
                </Box>
                <Typography>About</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ maxWidth: "calc(100%-250px)" }}>Content</Box>
        </Box>
      </Box>
    </div>
  );
};

export default Mainpage;
