import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import bg from "./leavebg.png";
import "./Signup.css";

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
} from "@mui/material";
import { useForm } from "react-hook-form";

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

export default function Signup() {
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

  return (
   
   <div>

    <Box sx={{
      maxWidth:500
    }}>
      <Button variant="outlined" onClick={handleClickOpen}>
        Signup
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
          <form onSubmit={handleSubmit(onSubmit)}>
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
                    margin:"1rem 1rem"
                }}
                className="Textfeid-Div"
              >
                <TextField
                  label="First Name"
                  variant="outlined"
                  {...register("FirstName", {
                    required: " FirstName is required.",
                  })}
                  error={Boolean(errors.FirstName)}
                  helperText={errors.FirstName?.message}
                  sx={{ margin:"1rem" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Sur Name"
                  variant="outlined"
                  {...register("SurName", { required: "SurName is required." })}
                  error={Boolean(errors.SurName)}
                  helperText={errors.SurName?.message}
                  sx={{ margin:"1rem" }}
                />
              </div>
            </div>
            <div className="Textfeid-Div" style={{
              textAlign:"center"
            }}>
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                type="email"
                {...register("email", { required: "E-mail  is required." })}
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
                sx={{margin:"1rem 0px", width:"80%"  }}
              />
            </div>
            <div className="Textfeid-Div" style={{
              textAlign:"center"
            }}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                {...register("Password", {
                  required: " Password is required.",
                })}
                error={Boolean(errors.Password)}
                helperText={errors.Password?.message}
                sx={{ margin:"1rem 0px", width:"80%" }}
              />
            </div>
            {/* Radio button */}

            <div className="clearfix"></div>
            {/* Check box */}
            <div
              style={{ textAlign: "center", padding: "15px",  }}
            >
              <Typography
                classname="Paragraph"
                sx={{
                  fontFamily: "Archivo",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "13px",
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
            <div className="clearfix"></div>
            <div style={{  textAlign: "center" }}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="btns"
                sx={{
                  background: "#009933",
                  fontFamily: "Archivo",
                  fontStyle: "normal",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  padding: "13px 22px",
                  wordSpacing:"7px",
                  letterSpacing:"2px"
                }}
              >
                Create Account
              </Button>
            </div>
          </form>

          <Divider sx={{ paddingTop: "20px" }}>Or Continue With</Divider>
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
  );
}
