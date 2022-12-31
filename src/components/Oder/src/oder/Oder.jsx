import * as React from "react";
import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Data from "./OderData";
import { Divider } from "@mui/material";
import "./Oder.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Women from "./images/women.png";
import ReactStars from "react-rating-stars-component";
import { MoreToLove } from "./OderData";
import Wallet from "../MyWallet/MyWallet";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Oder() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box className="Main-Box" p={2} style={{ borderRadius: "20px" }}>
        <Box
          style={{
            borderRadius: "20px 20px 20px 20px",
            width: "90%",
            margin: "auto",
            background: "white",
          }}
        >
          <Box
            sx={{
              borderRadius: "0px 0px 20px 20px",
              padding: "1rem 1.5rem",
              gap: "10px",
            }}
          >
            <div>
              <Grid container>
                <Grid item xs={12} md={10.4}>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                  >
                    <div>
                      <img src={Women} alt="" />
                    </div>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "36px",
                          fontWeight: 700,
                          fontFamily: "Archivo",
                          fontStyle: "normal",
                          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                          textTransform: "capitalize",
                          marginTop: "2rem",
                          marginLeft: "2rem",
                        }}
                      >
                        Monica Terzungwe
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: 400,
                          fontFamily: "Archive",
                          color: "#F0F5F1",
                          fontStyle: "normal",
                          marginLeft: "2rem",
                        }}
                      >
                        100 Favourite stores
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} m="auto" md={1.6}>
                  <Box>
                    <Button
                      sx={{
                        background: "#009933",
                        borderRadius: "10px",
                        padding: "11px 26px",
                        color: "#FFFFFF",
                        fontSize: "16px",
                        fontWeight: 600,
                        textTransform: "capitalize",
                        fontFamily: "Archivo",
                        fontStyle: "normal",
                      }}
                    >
                      Edit Profile
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </Box>

          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <Container>
            <Box sx={{ borderTop: 1, borderColor: "#FFFFFF" }}>
              <Tabs
                value={value}
                onChange={handleChange}
               
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
              >
                <Tab
                  sx={{ color: "#BDBDBD",fontFamily:" Archivo" }}
                  className="tabss"
                  label="My Oder"
                  {...a11yProps(0)}
                />
                <Tab
                  sx={{ color: "#BDBDBD" }}
                  className="tabss"
                  label="My Wallet"
                  {...a11yProps(1)}
                />
                <Tab
                  sx={{ color: "#BDBDBD" }}
                  className="tabss"
                  label="Payment"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ color: "#BDBDBD" }}
                  className="tabss"
                  label="Wish list"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ color: "#BDBDBD" }}
                  className="tabss"
                  label="Fav Store"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ color: "#BDBDBD" }}
                  className="tabss"
                  label="Viewed"
                  {...a11yProps(2)}
                />
                <Tab
                  sx={{ color: "#BDBDBD" }}
                  className="tabss"
                  label="My Coupons"
                  {...a11yProps(2)}
                />
              </Tabs>
            </Box>
          </Container>
        </Box>
      </Box>
      <TabPanel value={value} index={0}>
        {Data.map((item) => {
          return (
            <Box className="Main-Box" p={2} style={{ borderRadius: "20px" }}>
              <Box
                style={{
                  background: "white",
                  borderRadius: "20px 20px 20px 20px",
                  width: "90%",
                  margin: "auto",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "96%",
                    margin: "auto",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontFamily: "Archivo",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: { xs: "10px", md: "20px" },
                        lineHeight: "123.99%",
                        color: " #000000",
                      }}
                    >
                      Awaiting Delivery
                    </Typography>
                  </Box>
                  <div style={{ display: "flex" }}>
                    <Box
                      sx={{
                        borderRight: "1px solid #BDBDBD",
                        textAlign: "right",
                        paddingRight: "10px",
                      }}
                    >
                      <Typography sx={{ fontSize: { xs: "10px", md: "15px" } }}>
                        Oder date: 9 Oct 2022{" "}
                      </Typography>
                      <Typography sx={{ fontSize: { xs: "10px", md: "15px" } }}>
                        Oder Id:000000000000000
                      </Typography>
                    </Box>
                    <Box sx={{ margin: "auto" }}>
                      <Typography
                        sx={{
                          paddingLeft: "7px",
                          fontFmily: "Archivo",
                          fontStyle: "Bold",
                          fontWeight: 700,
                          fontSize: { xs: "10px", md: "25px" },
                          lineHeight: "24px",
                          color: "#333333",
                        }}
                      >
                        Oder Details {">"}
                      </Typography>
                    </Box>
                  </div>
                </Box>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Divider sx={{ width: "96%" }}></Divider>
                </div>

                <div style={{ textAlign: "start", padding: "15px 2rem" }}>
                  <Typography
                    sx={{
                      fontFamily: "Archivo",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "17px",
                      lineHeight: "24px",
                      color: " #828282",
                    }}
                  >
                    Store Name here {">"}
                  </Typography>
                </div>

                <div>
                  <Grid container>
                    <Grid item xs={12} sm={6} md={9.5}>
                      <Box
                        sx={{
                          padding: { xs: "20px 0px", md: "20px" },
                          display: "flex",
                        }}
                      >
                        <div>
                          <img
                            style={{ borderRadius: "15px" }}
                            src={item.image}
                          />
                        </div>
                        <Box
                          ml={4}
                          mt={2}
                          sx={{
                            textAlign: "left",
                          }}
                        >
                          <Typography
                            style={{
                              fontFamily: "Archivo",
                              fontStyle: " normal",
                              fontWeight: 500,
                              color: "#828282",
                              fontSize: { xs: "10px", md: "20px" },
                            }}
                          >
                            {item.name}
                          </Typography>

                          <Typography
                            sx={{
                              color: "#828282",
                              fontStyle: "normal",
                              fontWeight: 500,
                              fontSize: "14px",
                              margin: "2.2rem 0px",
                            }}
                          >
                            color
                          </Typography>
                          <Typography
                            sx={{
                              // display: "flex",
                              alignItems: { xs: "center", md: "left" },
                              // margin: "2rem opx",
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontWeight: 700,
                              fontSize: { xs: "10px", md: "28px" },
                            }}
                          >
                            {item.Disprice}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={2.5}>
                      <Box>
                        <Box
                          m="auto"
                          sx={{
                            margin: "1rem 0rem",
                          }}
                        >
                          <div>
                            <Typography
                              sx={{
                                fontFamily: "Arial",
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "16px",
                                /* identical to box height, or 20px */

                                color: "#000000",
                              }}
                            >
                              ToTal:{item.OrigPrice}
                            </Typography>
                          </div>
                          <div>
                            <Button
                              sx={{
                                background: "#009933",
                                color: "white",
                                padding: { xs: "5px", md: "10px" },
                                borderRadius: "10px",
                                margin: "2rem 0px",
                              }}
                              className="btn"
                            >
                              Confirm Recipt
                            </Button>
                          </div>
                          <div
                            style={
                              {
                                // padding: "10px 0px"
                              }
                            }
                          >
                            <Button
                              sx={{
                                color: "grey",
                                padding: { xs: "5px 15px", md: "10px 26px" },
                                borderRadius: "10px ",
                                border: "1px solid grey",
                              }}
                            >
                              Track Oder
                            </Button>
                          </div>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </div>
              </Box>
            </Box>
          );
        })}

      </TabPanel>
      <TabPanel value={value} index={1}>
       <Wallet/>
      </TabPanel>
        <Box
          mt={10}
          mb={10}
          sx={{
            textAlign: "center ",
          }}
        >
          <button
            style={{
              background: "#60D913",
              borderRadius: "10px",
              padding: "11px 26px",
              color: "#FFFFFF",
              borderColor: "#60D913",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "1px",
              cursor: "pointer",
            }}
          >
            See more&#8744;{" "}
          </button>
        </Box>
        <Box
          ml={10}
          mb={4}
          sx={{
            background: "#FFFFFF",
            borderRadius: "10px",
            padding: "1rem 1.5rem",
          }}
        >
          <Box>
            <Container>
              <Typography
                mb={1}
                sx={{
                  fontSize: "16px",
                  fontWeight: 700,
                  fontFamily: "Archivo",
                  color: "#000000",
                }}
              >
                More to love
              </Typography>

              <Divider
                sx={{
                  color: "#BDBDBD",
                  fontWeight: 800,
                  // border:"2px solid #BDBDBD",
                }}
              />
            </Container>
          </Box>
          <div sx={{ width: "100%", padding: "20px" }}>
            <Grid container>
              {MoreToLove.map((item, ind) => {
                return (
                  <>
                    <Grid item xs={12} sm={6} md={2} key={ind}>
                      <Box sx={{ padding: "20px" }}>
                        <img
                          style={{ borderRadius: "15px", width: "100%" }}
                          src={item.img}
                        />
                        <Typography
                          style={{
                            fontFamily: "Archivo",
                            fontStyle: " normal",
                            fontWeight: 600,
                            lineHeight: "123.99%",
                            color: "#828282",
                            fontSize: "12px",
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Typography
                            style={{
                              display: "flex",
                              alignItems: "center",
                              margin: "0px",
                              fontFamily: "Arial",
                              fontStyle: "normal",
                              fontWeight: 700,
                              fontSize: "15px",
                            }}
                          >
                            {item.Disprice}
                          </Typography>
                          <div>
                            <ReactStars
                              count={5}
                              size={15}
                              activeColor="#ffd700"
                            />
                          </div>
                        </Box>
                        <Typography
                          style={{
                            color: "#828282",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "123.99%",
                          }}
                        >
                          {item.OrigPrice}
                        </Typography>

                        {/* <div style={{
                                                    textAlign:"center"
                                                }}>
                                                    <button className='AddToBsktBtn' style={{
                                                        padding:"1rem 2rem",
                                                        borderRadius:"12px",
                                                        background:"transparent",
                                                        marginTop:"1rem",
                                                        border:"2px solid #60D913",
                                                        color:"#60D913",
                                                        fontSize:"16px",
                                                        fontWeight:600,
                                                        fontFamily:'Archivo',
                                                        cursor:"pointer"
                                                    }}>Add to Basket</button>
                                                </div> */}
                      </Box>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </div>
        </Box>
    </div>
  );
}
