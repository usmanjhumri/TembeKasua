import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import Image from "./Abouttembekasua.png"
export default function About() {

    return (
        <Box sx={{ padding: "10px" }}>
            <div style={{
                background: "white",
                padding: "18px"
            }}>
                <Grid item sx={12} md={12}>
                    <div style={{ padding: "20px" }}>
                        <img
                            src={Image}

                        />
                    </div>

                </Grid>
                <Grid item sx={12} md={12}>

                    <Typography sx={{
                        fontFamily: 'Arial',
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: " 16px",
                        lineHeight: "20px",
                        padding: "18px",
                        /* Gray 3 */

                        color: "#828282",
                    }}>
                        Aliquam in commodo dui. Integer rhoncus lorem eu consequat feugiat. Morbi nunc leo, ultricies eget velit quis, condimentum congue eros. Donec placerat ac velit et elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum eu luctus magna. Nulla facilisi. Pellentesque nec elit sit amet nibh scelerisque ultricies. Cras dignissim pulvinar augue pharetra tempus. Etiam eleifend tincidunt nunc eget egestas. Pellentesque a eros justo. Etiam tempus neque risus, vel elementum nibh venenatis dignissim .
                    </Typography>
                </Grid>
                <Grid item sx={12} md={12}>
                    <div style={{ padding: "20px" }}>
                        <a href="" style={{
                            textDecoration: "none",
                            fontFamily: 'Arial',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '20px',

                            color: '#2F80ED',
                        }}> View more {">>"}</a>
                    </div>
                </Grid>
            </div>
        </Box >
    )

}