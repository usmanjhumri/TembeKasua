import { Button, TextField, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import NavMenu from "../SideBar/NavMenu";
import LOGO from "./nav-logo.png";
import ADD_TO_CARD from "./basket-icon.png";
import HEART from "./heart-icon.png";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
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
  Typography,
  Divider,
  Box,
  Container,
} from "@mui/material";
import { useForm } from "react-hook-form";
import MobileActions from "./MobileActions";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


const Header = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(user) {
    console.log(user);
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const matches = useMediaQuery("(max-width:1000px)");
  const matches700 = useMediaQuery("(min-width:700px)");

  const searchTextField = {
    fontSize: "12px",
    fontWeight: 800,
    minWidth: "400px",
    fieldset: {
      // borderRadius: 0,
      borderRight: 0,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "#CDCDCD",
      borderRight: 0,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#CDCDCD",
      borderRight: 0,
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#CDCDCD",
      borderRight: 0,
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.15)",
      }}
      mb={1}
      py={0.5}
    >
      <Stack
        direction={"row"}
        px={{ xs: 1, md: 5 }}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Stack
          direction={"row"}
          columnGap={{ xs: 2, md: 6 }}
          alignItems="center"
          justifyContent={"space-between"}
        >
          {matches ? <NavMenu /> : null}
          <Box
            component={"img"}
            src={LOGO}
            sx={{
              display: { sm: "block" },
              width: "100%",
              maxWidth: { xs: "100px", sm: "150px", md: "180px" },
            }}
          />

          {matches700 && (
            <FormGroup row>
              <TextField
                sx={searchTextField}
                size="small"
                variant="outlined"
                placeholder="Search food items, classification and categories"
              />
              <Button
                size="small"
                color="success"
                sx={{
                  marginLeft: "-11px",
                  fontSize: "11px",
                  borderRadius: "15px",
                  backgroundColor: "#009933",
                  textTransform: "capitalize",
                }}
                variant="contained"
                disableElevation
              >
                sEARCH
              </Button>
            </FormGroup>
          )}
        </Stack>

        {!matches && (
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"space-between"}
          >
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
<div>

<Box sx={{
  // maxWidth:500
}}>
  <Button variant="outlined" onClick={handleClickOpen} sx={{ background:"#009933",color:"white"}}>
   Create Account
  </Button>
  <BootstrapDialog
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <BootstrapDialogTitle
      id="customized-dialog-title"
      onClose={handleClose}
    >
      <div style={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Archivo",
            fontStyle: " normal",
            fontWeight: 600,
            fontSize: "21.3333px",
            lineHeight: "32px",
            color: "#828282",
           
          }}
        >
          Signup
        </Typography>
      </div>
    </BootstrapDialogTitle>
    <Box sx={{
      // maxWidth:"800px"
    }}>
    <DialogContent 
      dividers
      sx={{
        overflow: "hidden",
        // width: "600px",
        background: ` url(${bg})`,
        backgroundRepeat: "no-repeat",
       

      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{
        padding:"0px 3rem"
      }}>
        <div style={{
           textAlign: "center"
            }}>
          <FormControl
            error={Boolean(errors.gender)}
            sx={{ 
              // margin: "auto" 
          }}
          >
            <RadioGroup row name="User">
              <FormControlLabel
                value="Buyer"
                control={
                  <Radio
                    {...register("User", { required: "Select One" })}
                  />
                }
                label="Buyer"
              />
              <FormControlLabel
                value="Store"
                control={
                  <Radio
                    {...register("User", { required: "Select One" })}
                  />
                }
                label="Store"
              />
            </RadioGroup>
            <FormHelperText style={{ color: "#d32f2f" }}>
              {errors.User?.message}
            </FormHelperText>
          </FormControl>
        </div>
        <div style={{ 
          // display: "flex", justifyContent: "center"
          textAlign:"center"
           }}>
          <div
            style={{
              // display: "flex",
              // justifyContent: "space-between",
              // left:'1.5%',
                // margin:"0.5rem",
                textAlign:"center"
            }}
            className="Textfeid-Div"
          >
            <TextField className="inputRounded"
              label="First Name"
              variant="outlined"
              {...register("FirstName", {
                required: " FirstName is required.",
              })}
              error={Boolean(errors.FirstName)}
              helperText={errors.FirstName?.message}
              sx={{ margin:"0.5rem 1.5rem", width:"143px" }}
            />
            <TextField className="inputRounded"
              id="outlined-basic"
              label="Sur Name"
              variant="outlined"
              {...register("SurName", { required: "SurName is required." })}
              error={Boolean(errors.SurName)}
              helperText={errors.SurName?.message}
              sx={{ margin:"0.5rem 1.5rem", width:"143px" }}
            />
          </div>
        </div>
        <div className="Textfeid-Div" style={{
          textAlign:"center"
        }}>
          <TextField className="inputRounded"
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            type="email"
            {...register("email", { required: "E-mail  is required." })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            sx={{ width:"80%",margin:"0.7rem 0px",  }}
          />
        </div>
        <div className="Textfeid-Div" style={{
          textAlign:"center"
        }}>
          <TextField className="inputRounded"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            {...register("Password", {
              required: " Password is required.",
            })}
            error={Boolean(errors.Password)}
            helperText={errors.Password?.message}
            sx={{ margin:"0.7rem 0px", width:"80%", borderRadius:10 }}
          />
        </div>
        {/* Radio button */}

        <div className="clearfix"></div>
        {/* Check box */}
        <div
          style={{ textAlign: "center",   }}
        >
          <Typography
            classname="Paragraph"
            sx={{
              fontFamily: "Archivo",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "10px",
              lineHeight: "14px",
            }}
          >
            By Creating an account, you agree to our
            <a style={{ textDecoration: "none", color: "blue" }} href="">
              User Agreement
            </a>{" "}
            <br/>
            and acknowledge reading our
            <a href="" style={{ textDecoration: "none", color: "blue" }}>
              User Privacy
            </a>{" "}
            .
          </Typography>
        </div>
        {/* <div className="clearfix"></div> */}
        <div style={{  textAlign: "center", marginTop:"0.5rem" }}>
          <button
            className="create-account-btn"
            style={{
              background: "#009933",
              fontFamily: "Archivo",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "24px",
              padding: "11px 26px",
             
              color:"#FFFFFF",
              cursor:"pointer",
              border:"1px solid #009933",
              borderRadius:"10px"
            }}
          >
            Create Account
          </button>
        </div>
      </form>

<Container>
      <Divider sx={{ marginTop:"0.5rem", fontSize:"12px", color:"#828282"  }}>Or Continue With</Divider>
</Container>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "15px",
        }}
      >
        <FacebookRoundedIcon />
        <GoogleIcon />
      </div>
      <div style={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "24px",
          }}
        >
          {" "}
          Already have an account?
          <a href="" style={{ textDecoration: "none", color: "blue" }}>
            {" "}
            Sign In
          </a>
        </Typography>
      </div>
    </DialogContent>
    </Box>
  </BootstrapDialog>
  </Box>
</div>

            <Button
              color="success"
              variant="contained"
              sx={{
                background: "#BDBDBD",
                // padding: "0px 1rem",
                borderRadius: "10px",
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
                marginLeft: "0.7rem",
                fontSize: { xs: "10px", sm: "12px", md: "14px" },
                textTransform: "capitalize",
              }}
            >
              Sign in
            </Button>
          </Stack>
        )}

        {matches && <MobileActions />}
      </Stack>
    </Box>
  );
};

export default Header;
