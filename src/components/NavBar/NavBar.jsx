import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import LOGO from "./nav-logo.png";
import ADD_TO_CARD from "./basket-icon.png";
import HEART from "./heart-icon.png";
import "./NavBar.css";
import { Button, TextField, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import NavMenu from "../SideBar/NavMenu";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import bg from "./leavebg.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GoogleIcon from "@mui/icons-material/Google";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
  Grid,
  Divider,
  Container,
} from "@mui/material";
import { useForm } from "react-hook-form";
import Signup from "../Signup/Signup/Signup";
import Login from "../../Login/Login";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));


export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);

    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="black !important"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '3px', boxShadow: '20px 5px 5px lightGray' }}>
      <AppBar
        position="static"
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.15)",
          padding: "0.5rem 0px",
        }}
      >
        <Toolbar>
          <Box
            component={"img"}
            src={LOGO}
            sx={{ display: { sm: "block" } }}
          ></Box>

          <Box
            sx={{
              textAlign: "center",

              display: { xs: "none", md: "flex", sm: "flex" },
            }}
          >
            <div
              className="nav_search_btn"
              style={{
                marginLeft: "3rem",
              }}
            >
              <input
                type="text"
                id="navinput"
                placeholder="Search food items, classification and categories "
                style={{
                  background: "#F9F9F9",
                  border: "1px solid #BDBDBD",
                  borderRadius: "11px",
                  padding: "0.5rem 1rem",
                  borderRight: "none",
                  textAlign: "left",
                  height: "2rem",
                  width: "170%",
                }}
              />
            </div>

            <div>
              <button
                style={{
                  borderRadius: "11px",
                  padding: "0.5rem 1rem",
                  border: "1px solid #BDBDBD",
                  background: "#009933",
                  marginLeft: "8rem",
                  color: "#FFFFFF",
                  cursor: "pointer",
                }}
              >
                search
              </button>
            </div>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              // marginLeft:"14.2rem"
            }}
          />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img
              src={HEART}
              alt=""
              style={{
                cursor: "pointer",
              }}
            />

            <img
              src={ADD_TO_CARD}
              alt=""
              style={{
                margin: "0px 0.5rem",
                cursor: "pointer",
              }}
            />

            <Signup />
            <Login />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
