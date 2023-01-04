import { Box, Container, Grid, Typography } from "@mui/material";

import OfficalData from "./Ofiicaldata/Officaldata";


export default function Official() {

    return (
        <div> 

            <Box m={2}>
                <Grid container>
                    <Grid item xs={12} md={12} >
                       
                            <div style={{
                                fontFamily: 'Archivo', color: "#009933", fontStyle: ' normal',

                                fontSize: '20px',
                                lineHeight: '22px',
                                textAlign: ' center',
                                borderRadius: "20px",
                           
                                background:"white",
                                margin:"1rem 0px"
                            }}>
                                <Typography variant="h4" sx={{ fontWeight: 800, }}>
                                    Offical store
                                </Typography>
                            </div>
                       
                    </Grid>
                            <Grid container>
                                {
                                    OfficalData.map((item) => {
                                        return (

                                            <Grid item xs={6} sm={4} md={2} >
                                                <div style={{
                                                }}>
                                                    <img
                                                        src={item.image}
                                                        style={{
                                                            borderRadius:"10px",
                                                            margin:"0.5rem 0px",
                                                            // width:"100%",
                                                            
                                                        }}

                                                    />
                                                </div>
                                            </Grid>
                                        )
                                    })
                                }

                            </Grid>

                </Grid>
            </Box>
        </div>
    )

}