import * as React from "react";
import { Box, Button, Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import "./Wallet.css";
import logo from "./images/Vector.png";
import logo2 from "./images/Abc.png";
import WalletData from "./WalletData";

export default function Wallet() {
  return (
    <Box>


      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box className="Main-Box"  style={{ borderRadius: "20px" }}>
              <Box
                style={{
                  background: "white",
                  borderRadius: "20px 20px 20px 20px",
                  // width: "90%",
                  // margin: "auto",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    // margin: "auto",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontFamily: "Archivo",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: { xs: "10px", md: "15px" },
                        lineHeight: "123.99%",
                        color: " #828282",
                        gap: "5px",
                        padding: "10px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <img src={logo} />
                      Cash Account
                    </Typography>
                  </Box>
                </Box>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Divider sx={{ width: "96%" }}></Divider>
                </div>
                <div style={{ textAlign: "left", padding: " 10px 20px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: { xs: "3rem", md: "4rem" },
                      color: "#000000",
                    }}
                  >
                    ₦60,000
                  </Typography>
                </div>
                <div
                  style={{
                    padding: "0px 25px",
                    textAlign: "end",
                    marginBottom: "1rem",
                  }}
                >
                  <button
                    style={{
                      background: " #009933",
                      borderRadius: "10px",
                      padding: "11px 26px",
                      color: "#FFFFFF",
                      borderColor: "#60D913",
                      fontSize: "16px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      cursor: "pointer",
                      paddigBottom: "15px",
                    }}
                  >
                    Top Up
                  </button>
                </div>
              </Box>
            </Box>
          </Grid>

















          <Grid item xs={12} md={6}>
            <Box className="Main-Box"  sx={{ borderRadius: "20px" }}>
              <Box
                style={{
                  background: "white",
                  borderRadius: "20px 20px 20px 20px",
                  // width: "90%",
                  // margin: "auto",
                }}
              >
                <Box
                  sx={{
                    // display: "flex",
                    // justifyContent: "space-between",
                    // margin: "auto",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Archivo",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: { xs: "10px", md: "15px" },
                        lineHeight: "123.99%",
                        color: " #828282",
                        gap: "5px",
                        padding: "10px",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <img src={logo2} />
                      Tk Coins
                    </Typography>
                  </Box>
                </Box>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Divider sx={{ width: "96%" }}></Divider>
                </div>
                <div style={{ textAlign: "left", padding: " 10px 20px" }}>
                  <Typography
                    sx={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: 700,
                      fontSize: { xs: "3rem", md: "4rem" },
                      color: "#000000",
                    }}
                  >
                    1000
                  </Typography>
                </div>
                <div
                  style={{
                    padding: "0px 25px",
                    textAlign: "end",
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Archivo",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: {xs:"11px",md:"16px"},
                      margin: "auto 0px",
                    }}
                  >
                    1TK coin = ₦5
                  </Typography>
                  <button
                    style={{
                      background: " #009933",
                      borderRadius: "10px",
                      padding: "11px 26px",
                      color: "#FFFFFF",
                      borderColor: "#60D913",
                      fontSize: "16px",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      cursor: "pointer",
                      paddigBottom: "15px",
                    }}
                  >
                    Exchange
                  </button>
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
        </Container>

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
              margin: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Archivo",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: { xs: "10px", md: "15px" },
                  lineHeight: "123.99%",
                  color: " #828282",
                  padding: "10px",
                }}
              >
                Transection
              </Typography>
            </Box>
          </Box>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Divider sx={{ width: "96%" }}></Divider>
          </div>
          <Box>
            <Grid contaienr>
              {WalletData.map((item) => {
                {
                  return (
                    <>
                      <Grid item sx={12} md={12}>
                        <Box sx={{ textAlign: "left", padding: "10px 15px" }}>
                          <Typography
                            sx={{
                              fontFamily: "Archivo",
                              fontStyle: "normal",
                              fontWeight: 400,
                              fontSize: "16px",
                            }}
                          >
                            {item.Date}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "15px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                            }}
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <img src={item.image} />
                            </div>
                            <Box>
                              <Typography
                                sx={{
                                  fontFamily: "Archivo",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: { xs: "10px", md: "16px" },
                                }}
                              >
                                {item.ItemName}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "Archivo",
                                  fontStyle: "normal",
                                  fontWeight: 400,
                                  fontSize: { xs: "9px", md: "12px" },
                                  color: "#828282",
                                  textAlign: "left",
                                }}
                              >
                                {item.StoreName}
                              </Typography>
                            </Box>
                          </div>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: "Archivo",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: { xs: "10px", md: "16px" },
                              }}
                            >
                              {item.Time}{" "}
                            </Typography>
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: "Arial",
                                fontStyle: "normal",
                                fontWeight: 400,
                                fontSize: { xs: "12px", md: "16px" },
                              }}
                            >
                              {item.Price}
                            </Typography>
                          </Box>
                        </Box>
                        <Divider></Divider>
                      </Grid>
                    </>
                  );
                }
              })}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
