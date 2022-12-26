import { Box, Container, Grid, Typography } from "@mui/material";

import OfficalData from "./Ofiicaldata/Officaldata";


export default function Official() {

    return (
        <Box> 

            <div style={{width:"90%",marginLeft:"5%"}}>
                <Grid container>
                    <Grid item xs={12} md={12} style={{display:"flex",justifyContent:"center"}}>
                        <div style={{
                            padding: "5px",
                            width: "96%",
                            borderRadius: "20px",
                            display: "flex",
                            justifyContent: "center",
                            background:"white",
                       
                        }}>
                            <div style={{
                                fontFamily: 'Archivo', color: "#009933", fontStyle: ' normal',

                                fontSize: '20px',
                                lineHeight: '22px',
                                display: ' flex',
                                alignItems: 'center',
                                textAlign: ' center',

                            }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, }}>
                                    Offical store
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Box>
                        <div  style={{width:"98%",margin:"auto"}}>
                            <Grid container>
                                {
                                    OfficalData.map((item) => {
                                        return (

                                            <Grid item xs={12} sm={3} md={2} spacing={2} style={{ display: "flex", justifyContent: "center", padding: "10px" }} >
                                                <div style={{
                                                    width: "180px",
                                                    background: "white",
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    borderRadius:"10px"
                                                }}>
                                                    <img
                                                        src={item.image}
                                                        style={{
                                                            borderRadius:"10px"
                                                        }}

                                                    />
                                                </div>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>
                        </div>
                    </Box>

                </Grid>
            </div>
        </Box>
    )

}