import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import ReactStars from "react-rating-stars-component";
import "./Sharp.css"
import Data from './Data/Data'

export default function Sharp() {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <Box className="Main-Box" p={3} style={{ borderRadius: "20px", }} >
            <Box style={{

                background: "white",
                borderRadius: "20px 20px 20px 20px",
                width: "90%",
                margin: "auto"


            }}>
                <Box style={{
                    background: "#009933",
                    borderRadius: "20px 20px 0px 0px",
                    // alignItems: "center",
                    padding: "0.5rem 0px",

                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        // width: "100%",
                        // margin: "auto"
                    }}>
                        <div style={{
                            margin: "0px 2rem",
                        }}>
                            <Typography sx={{
                                fontFamily: 'Archivo',
                                fontStyle: " italic",
                                fontWeight: 800,
                                // fontSize: { xs: "20px", sm: "20px", md: "25px" },
                                lineHeight: "22px",
                                color: "white",
                                fontSize: { xs: "15px", md: "20PX" }
                            }}>
                                Sharp-Sharp <span className="Span-text">Deals</span>
                            </Typography>
                        </div>
                        <div style={{

                            margin: "auto",

                        }}>
                            <Typography sx={{
                                fontFamily: 'Arial',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '123.99%',
                                color: "white",
                                fontSize: { xs: "10px", md: "16PX" }
                            }}>
                                Time Left: 20h : 35m :06s
                            </Typography>
                        </div>
                        <div style={{
                            margin: "0px 2rem",

                        }}>
                            <Typography sx={{
                                fontFamily: 'Arial',
                                fontStyle: 'normal',
                                fontWeight: { xs: 400, md: 700 },
                                lineHeight: '123.99%',
                                color: "white",
                                fontSize: { xs: "13px", md: "16px" }
                            }}>
                                See more {">"}
                            </Typography>
                        </div>
                    </div>
                </Box>
                <div sx={{ width: "100%", padding: "20px", }}>
                    <Grid container >
                        {
                            Data.map((item) => {
                                return (
                                    <>
                                        <Grid item xs={12} sm={6} md={2} >
                                            <Box sx={{ padding: "20px" }}>

                                                <img
                                                    style={{ borderRadius: "15px", width: "100%" }}
                                                    src={item.image} />
                                                <Typography style={{
                                                    fontFamily: 'Archivo',
                                                    fontStyle: " normal",
                                                    fontWeight: 500,
                                                    lineHeight: '123.99%',
                                                    color: "#828282"
                                                }}>
                                                    {item.name}
                                                </Typography>
                                                <Box style={{
                                                    display: 'flex',
                                                    justifyContent: "space-between", width: "100%"
                                                }}>
                                                    <Typography style={{
                                                        display: "flex",
                                                        alignItems: "center", margin: "0px",
                                                        fontFamily: 'Arial',
                                                        fontStyle: "normal",
                                                        fontWeight: 700,
                                                    }}>
                                                        {item.Disprice}
                                                    </Typography>
                                                    <div >
                                                        <ReactStars
                                                            count={5}
                                                            onChange={ratingChanged}
                                                            size={15}
                                                            activeColor="#ffd700"
                                                        />
                                                    </div>
                                                </Box>
                                                <Typography style={{
                                                    color: "#828282",
                                                    fontStyle: "normal",
                                                    fontWeight: 500,
                                                    lineHeight: "123.99%"
                                                }}>
                                                    {item.OrigPrice}
                                                </Typography>

                                            </Box>

                                        </Grid>
                                    </>
                                )
                            })
                        }


                    </Grid >
                </div >
            </Box>
        </Box >

    )

}